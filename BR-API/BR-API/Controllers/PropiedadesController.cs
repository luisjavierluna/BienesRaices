using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;
using Microsoft.EntityFrameworkCore;
using BR_API;
using BR_API.Entities;
using BR_API.DTOs;
using AutoMapper;
using BR_API.Utilities;
using AutoMapper.QueryableExtensions;
using Microsoft.AspNetCore.Authorization;
using Microsoft.AspNetCore.Authentication.JwtBearer;

namespace BR_API.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class PropiedadesController : ControllerBase
    {
        private readonly ApplicationDbContext _context;
        private readonly IMapper mapper;
        private readonly IAlmacenadorArchivos almacenadorArchivos;
        private readonly string contenedor = "propiedades";

        public PropiedadesController(
            ApplicationDbContext context,
            IMapper mapper,
            IAlmacenadorArchivos almacenadorArchivos)
        {
            _context = context;
            this.mapper = mapper;
            this.almacenadorArchivos = almacenadorArchivos;
        }

        [HttpGet]
        public async Task<IActionResult> GetPropiedades()
        {
            var propiedades = await _context.Propiedades
                .ProjectTo<PropiedadDTO>(mapper.ConfigurationProvider)
                .ToListAsync();

            return Ok(propiedades);
        }

        [HttpPost]
        [Authorize(AuthenticationSchemes = JwtBearerDefaults.AuthenticationScheme)]
        public async Task<IActionResult> PostPropiedad([FromForm]PropiedadCreacionDTO propiedadCreacionDTO)
        {
            var propiedad = mapper.Map<Propiedad>(propiedadCreacionDTO);

            propiedad.Creado = DateTime.Now;

            if (propiedadCreacionDTO.Imagen != null)
            {
                propiedad.Imagen = await almacenadorArchivos.GuardarArchivo(contenedor, propiedadCreacionDTO.Imagen);
            }

            await _context.Propiedades.AddAsync(propiedad);
            await _context.SaveChangesAsync();

            return Ok(propiedad);
        }

        [HttpGet("{id:int}")]
        [Authorize(AuthenticationSchemes = JwtBearerDefaults.AuthenticationScheme)]
        public async Task<IActionResult> GetPropiedad(int id)
        {
            var propiedadExistente = await _context.Propiedades.FirstOrDefaultAsync(x => x.Id == id);

            if (propiedadExistente == null)
            {
                return NotFound("Propiedad no encontrada");
            }

            return Ok(propiedadExistente);
        }

        [HttpPut("{id:int}")]
        [Authorize(AuthenticationSchemes = JwtBearerDefaults.AuthenticationScheme)]
        public async Task<IActionResult> PutPropiedad([FromForm] PropiedadCreacionDTO nuevaPropiedad, int id)
        {
            var propiedadActualizar = await _context.Propiedades.FirstOrDefaultAsync(x => x.Id == id);

            if (propiedadActualizar == null)
            {
                return NotFound("Propiedad no encontrada");
            }

            propiedadActualizar = mapper.Map(nuevaPropiedad, propiedadActualizar);

            if (nuevaPropiedad.Imagen != null)
            {
                propiedadActualizar.Imagen = await almacenadorArchivos
                    .EditarArchivo(contenedor, nuevaPropiedad.Imagen, propiedadActualizar.Imagen);
            }

            await _context.SaveChangesAsync();

            return Ok(propiedadActualizar);
        }

        

        [HttpDelete("{id:int}")]
        [Authorize(AuthenticationSchemes = JwtBearerDefaults.AuthenticationScheme)]
        public async Task<IActionResult> DeletePropiedad(int id)
        {
            var propiedadEliminar = await _context.Propiedades.FirstOrDefaultAsync(x => x.Id == id);

            if (propiedadEliminar == null)
            {
                return NotFound("Propiedad no encontrada");
            }

            _context.Propiedades.Remove(propiedadEliminar);
            await _context.SaveChangesAsync();

            await almacenadorArchivos.BorrarArchivo(propiedadEliminar.Imagen, contenedor);

            return NoContent();
        }
    }
}
