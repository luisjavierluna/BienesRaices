using AutoMapper;
using BR_API.DTOs;
using BR_API.Entities;

namespace BR_API.Utilities
{
    public class AutoMapperProfiles: Profile
    {
        public AutoMapperProfiles()
        {
            CreateMap<PropiedadCreacionDTO, Propiedad>()
                .ForMember(x => x.Imagen, options => options.Ignore())
                .ForMember(x => x.Creado, options => options.Ignore());

            CreateMap<Vendedor, VendedorDTO>();
            CreateMap<Propiedad, PropiedadDTO>();
        }
    }
}
