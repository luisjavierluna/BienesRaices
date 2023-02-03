using System.ComponentModel.DataAnnotations;

namespace BR_API.DTOs
{
    public class CredencialesUsuarioRegistro : ICredencialesUsuario
    {
        [Required(ErrorMessage = "El campo {0} es requerido")]
        [Display(Name = "Nombre de Usuario")]
        public string Name { get; set; }

        [EmailAddress(ErrorMessage = "El {0} enviado no tiene un formato válido")]
        [Required(ErrorMessage = "El campo {0} es requerido")]
        public string Email { get; set; }

        [Required(ErrorMessage = "El campo {0} es requerido")]
        [Display(Name = "Contraseña")]
        public string Password { get; set; }
    }
}
