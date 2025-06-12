namespace API.Entities;


public class AppUSer
{
    public int Id { get; set; }
    public required string UserName { get; set; }
    public required string Password { get; set; }
}