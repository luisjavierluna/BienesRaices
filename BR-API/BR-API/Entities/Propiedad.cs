using System.ComponentModel.DataAnnotations.Schema;

namespace BR_API.Entities
{
    public class Propiedad
    {
        public int Id { get; set; }
        public string Titulo { get; set; }
        public decimal Precio { get; set; }
        public string Imagen { get; set; }
        public string Descripcion { get; set; }
        public int Habitaciones { get; set; }
        public int WC { get; set; }
        public int Estacionamiento { get; set; }
        public DateTime Creado { get; set; }
        public int VendedorId { get; set; }
        public Vendedor Vendedor { get; set; }
    }
}
