using Microsoft.AspNetCore.Identity;

namespace BR_API.Entities
{
    public class AppUser : IdentityUser
    {
        public string Name { get; set; }
    }
}
