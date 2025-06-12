using System;
using System.IdentityModel.Tokens.Jwt;
using System.Security.Claims;
using System.Text;
using API.Entities;
using API.Interfaces;
using Microsoft.IdentityModel.Tokens;

namespace API.Services;

public class TokenService(IConfiguration configuration) : ITokenService
{
    public string CreateToken(AppUser appUser)
    {
        var tokenKey = configuration["TokenKey"] ?? throw new Exception("Can not access TokenKey from appsettings");
        if (tokenKey.Length < 64)
            throw new Exception("TokenKey must be at least 64 characters long");

        var claims = new List<Claim>
        {
            new(ClaimTypes.Name,appUser.UserName),
        };

        var key = new SymmetricSecurityKey(Encoding.UTF8.GetBytes(tokenKey));
        var creds = new SigningCredentials(key, SecurityAlgorithms.HmacSha512Signature);

        var tokenDescritor = new SecurityTokenDescriptor
        {
            Subject = new ClaimsIdentity(claims),
            Expires = DateTime.UtcNow.AddDays(1),
            SigningCredentials = creds
        };

        var tokenhandler = new JwtSecurityTokenHandler();
        var token = tokenhandler.CreateToken(tokenDescritor);

        return tokenhandler.WriteToken(token);
    }
}
