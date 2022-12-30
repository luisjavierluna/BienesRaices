using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;
using Microsoft.EntityFrameworkCore;
using BR_API;
using BR_API.Entities;

namespace BR_API.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class PropiedadesController : ControllerBase
    {
        private readonly ApplicationDbContext _context;

        public PropiedadesController(ApplicationDbContext context)
        {
            _context = context;
        }

        [HttpGet]
        public async Task<IActionResult> GetPropiedades()
        {
            var propiedades = await _context.Propiedades.ToListAsync();

            return Ok(propiedades);
        }

        [HttpPost]
        public async Task<IActionResult> PostPropiedad([FromBody]Propiedad propiedad)
        {
            await _context.Propiedades.AddAsync(propiedad);
            await _context.SaveChangesAsync();

            return Ok(NoContent());
        }

        [HttpGet("{id}")]
        public async Task<IActionResult> GetPropiedad(int id)
        {
            var propiedadExistente = await _context.Propiedades.FirstOrDefaultAsync(x => x.Id == id);

            if (propiedadExistente == null)
            {
                return NotFound("Propiedad no encontrada");
            }

            return Ok(propiedadExistente);
        }

        [HttpPut("{id}")]
        public async Task<IActionResult> PutPropiedad(int id, Propiedad propiedad)
        {
            if (id != propiedad.Id)
            {
                return BadRequest();
            }

            _context.Entry(propiedad).State = EntityState.Modified;

            try
            {
                await _context.SaveChangesAsync();
            }
            catch (DbUpdateConcurrencyException)
            {
                if (!PropiedadExists(id))
                {
                    return NotFound();
                }
                else
                {
                    throw;
                }
            }

            return NoContent();
        }

        

        [HttpDelete("{id}")]
        public async Task<IActionResult> DeletePropiedad(int id)
        {
            var propiedad = await _context.Propiedades.FindAsync(id);
            if (propiedad == null)
            {
                return NotFound();
            }

            _context.Propiedades.Remove(propiedad);
            await _context.SaveChangesAsync();

            return NoContent();
        }

        private bool PropiedadExists(int id)
        {
            return _context.Propiedades.Any(e => e.Id == id);
        }
    }
}
