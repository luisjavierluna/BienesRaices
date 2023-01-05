using BR_API.Entities;
using System.ComponentModel.DataAnnotations;

namespace BR_API.DTOs
{
    public class PropiedadDTO
    {
        public int Id { get; set; }
        [Required]
        public string Titulo { get; set; }
        [Required]
        public decimal Precio { get; set; }
        public string Imagen { get; set; }
        [Required]
        public string Descripcion { get; set; }
        [Required]
        public int Habitaciones { get; set; }
        [Required]
        public int WC { get; set; }
        [Required]
        public int Estacionamiento { get; set; }
        public DateTime Creado { get; set; }
        [Required]
        public int VendedorId { get; set; }
        [Required]
        public string VendedorNombre { get; set; }
        [Required]
        public string VendedorApellido { get; set; }
    }
}
