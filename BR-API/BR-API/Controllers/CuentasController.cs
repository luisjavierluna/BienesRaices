using BR_API.DTOs;
using BR_API.Entities;
using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Identity;
using Microsoft.AspNetCore.Mvc;
using Microsoft.EntityFrameworkCore;
using Microsoft.IdentityModel.Tokens;
using Newtonsoft.Json.Linq;
using System.Diagnostics;
using System.IdentityModel.Tokens.Jwt;
using System.Security.Claims;
using System.Text;

namespace BR_API.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class CuentasController : ControllerBase
    {
        private readonly UserManager<IdentityUser> userManager;
        private readonly SignInManager<IdentityUser> signInManager;
        private readonly ApplicationDbContext context;
        private readonly IConfiguration configuration;

        public CuentasController(
            UserManager<IdentityUser> userManager,
            SignInManager<IdentityUser> signInManager,
            ApplicationDbContext context,
            IConfiguration configuration)
        {
            this.userManager = userManager;
            this.signInManager = signInManager;
            this.context = context;
            this.configuration = configuration;
        }

        [HttpPost("registrarse")]
        public async Task<IActionResult> Registrarse([FromBody] CredencialesUsuarioRegistro credenciales)
        {   
            var nombreUsuario = await context.AppUsers.FirstOrDefaultAsync(x => x.Name == credenciales.Name);

            if (nombreUsuario != null)
            {
                return BadRequest($"Ya existe el Nombre de Usuario {nombreUsuario.Name}, por favor elige otro");
            }

            var emailUsuario = await context.AppUsers.FirstOrDefaultAsync(x => x.Email == credenciales.Email);

            if (emailUsuario != null)
            {
                return BadRequest($"Ya tenemos registrado en nuestro sistema el Email {emailUsuario.Email}");
            }

            var usuario = new AppUser 
            { 
                UserName = credenciales.Email, 
                Email = credenciales.Email,
                Name = credenciales.Name,
            };
            var resultado = await userManager.CreateAsync(usuario, credenciales.Password);

            if (resultado.Succeeded)
            {
                return await ConstruirToken(credenciales);
            }
            else
            {
                return BadRequest(resultado.Errors);
            }
        }

        [HttpPost("iniciar-sesion")]
        public async Task<IActionResult> IniciarSesion([FromBody] CredencialesUsuarioLogin credenciales)
        {
            var resultado = await signInManager.PasswordSignInAsync(credenciales.Email, credenciales.Password,
                isPersistent: false, lockoutOnFailure: false);

            if (resultado.Succeeded)
            {
                return await ConstruirToken(credenciales);
            }
            else
            {
                return BadRequest("El correo electrónico o contraseña son incorrectos");
            }
        }

        private async Task<IActionResult> ConstruirToken<T>(T credenciales) where T : ICredencialesUsuario
        {
            var usuarioRegistrado = await context.AppUsers.FirstOrDefaultAsync(x => x.Email == credenciales.Email);

            if (usuarioRegistrado == null)
            {
                return BadRequest($"Hubo un error inesperado relacionado al usuario con correo {usuarioRegistrado.Email}");
            }

            var claims = new List<Claim>()
            {
                new Claim("email",credenciales.Email),
                new Claim("userName",usuarioRegistrado.Name)
            };

            var usuario = await userManager.FindByEmailAsync(credenciales.Email);
            var claimsDB = await userManager.GetClaimsAsync(usuario);

            claims.AddRange(claimsDB);

            var llave = new SymmetricSecurityKey(Encoding.UTF8.GetBytes(configuration["jwtKey"]));
            var creds = new SigningCredentials(llave, SecurityAlgorithms.HmacSha256);

            var expiracion = DateTime.UtcNow.AddYears(1);

            var token = new JwtSecurityToken(issuer: null, audience: null, claims,
                expires: expiracion, signingCredentials: creds);

            var respuestaAutenticacion = new RespuestaAutenticacion()
            {
                Token = new JwtSecurityTokenHandler().WriteToken(token),
                Expiracion = expiracion
            };

            return Ok(respuestaAutenticacion);
        }
    }
}
