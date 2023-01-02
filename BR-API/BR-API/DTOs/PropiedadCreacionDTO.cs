using BR_API.Entities;
using System.ComponentModel.DataAnnotations;

namespace BR_API.DTOs
{
    public class PropiedadCreacionDTO
    {
        [Required]
        public string Titulo { get; set; }
        [Required]
        public decimal? Precio { get; set; }
        public IFormFile Imagen { get; set; }
        [Required]
        public string Descripcion { get; set; }
        [Required]
        public int? Habitaciones { get; set; }
        [Required]
        public int? WC { get; set; }
        [Required]
        public int? Estacionamiento { get; set; }
        public DateTime Creado { get; set; }
        [Required]
        [Display(Name = "Vendedor")]
        public int? VendedorId { get; set; }
    }
}
