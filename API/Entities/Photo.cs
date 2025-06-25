using System.ComponentModel.DataAnnotations.Schema;
using System.Text.Json.Serialization;

namespace API.Entities;


public class Photos
{
    public int Id { get; set; }
    public required string Url { get; set; }
    public required bool IsMain { get; set; }
    public string? PublicId { get; set; }

    [JsonIgnore]
    public int AppUserId { get; set; }
    public AppUser AppUser { get; set; } = null!;
}