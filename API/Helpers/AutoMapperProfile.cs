using API.DTOs;
using API.Entities;
using API.Extensions;
using AutoMapper;

namespace API.Helpers;

public class AutoMapperProfile : Profile
{
    public AutoMapperProfile()
    {
        CreateMap<AppUser, MemberDto>().
            ForMember(d => d.Age,
                o =>o.MapFrom(s => s.BirthDate.CalculateAge())).
            ForMember(d => d.PhotoUrl,
                o => o.MapFrom(s => s.Photos.FirstOrDefault(x=>x.IsMain)!.Url));
        
        CreateMap<Photos, PhotosDto>();
    }
}
