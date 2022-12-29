using System.ComponentModel.DataAnnotations.Schema;

namespace BR_API.Entities
{
    public class Vendedor
    {
        public int Id { get; set; }
        public string Nombre { get; set; }
        public string Apellido { get; set; }
        public string Telefono { get; set; }
        public Propiedad Propiedad { get; set; }
    }
}
