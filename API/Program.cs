using API.Extensions;
using API.Middlewares;

var builder = WebApplication.CreateBuilder(args);

builder.Services.AddApplicationServices(builder.Configuration);
builder.Services.AddIdentityServices(builder.Configuration);

var app = builder.Build();

app.UseMiddleware<ExceptionMiddleware>();

app.UseCors(options =>
{
    options.AllowAnyMethod()
           .AllowAnyHeader()
           .WithOrigins(
            "http://localhost:4200","https://localhost:4200");
});

app.UseAuthentication();
app.UseAuthorization();
app.MapControllers();


app.Run();
