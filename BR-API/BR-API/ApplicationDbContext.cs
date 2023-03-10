using BR_API.Entities;
using Microsoft.AspNetCore.Identity.EntityFrameworkCore;
using Microsoft.EntityFrameworkCore;
using System.Runtime.Intrinsics.X86;
using System.Security.Principal;

namespace BR_API
{
    public class ApplicationDbContext : IdentityDbContext
    {
        public DbSet<AppUser> AppUsers { get; set; }
        public DbSet<Propiedad> Propiedades { get; set; }
        public DbSet<Vendedor> Vendedores { get; set; }

        public ApplicationDbContext(DbContextOptions options) : base(options) { }

        protected override void OnModelCreating(ModelBuilder modelBuilder)
        {
            modelBuilder.Entity<AppUser>(user =>
            {
                user.HasIndex(x => x.Name).IsUnique();

                user.Property(x => x.Name).IsRequired();
            });

            modelBuilder.Entity<Propiedad>(propiedad =>
            {
                propiedad.ToTable("Propiedades");

                propiedad.HasKey(p => p.Id);

                propiedad.Property(p => p.Titulo)
                    .HasMaxLength(45)
                    .IsRequired();

                propiedad.Property(p => p.Precio)
                    .HasPrecision(10, 2)
                    .IsRequired();

                propiedad.Property(p => p.Imagen)
                    .HasMaxLength(200);

                propiedad.Property(p => p.Descripcion)
                    .IsRequired();

                propiedad.Property(p => p.Habitaciones)
                    .HasPrecision(1)
                    .IsRequired();

                propiedad.Property(p => p.WC)
                    .HasPrecision(1)
                    .IsRequired();

                propiedad.Property(p => p.Estacionamiento)
                    .HasPrecision(1)
                    .IsRequired();

                propiedad.HasOne(p => p.Vendedor)
                    .WithOne(v => v.Propiedad)
                    .HasForeignKey<Propiedad>(v => v.VendedorId)
                    .IsRequired()
                    .OnDelete(DeleteBehavior.Restrict);

            });

            modelBuilder.Entity<Vendedor>(vendedor =>
            {
                vendedor.ToTable("Vendedores");

                vendedor.HasKey(v => v.Id);

                vendedor.Property(v => v.Nombre).HasMaxLength(45);

                vendedor.Property(v => v.Apellido).HasMaxLength(45);

                vendedor.Property(v => v.Telefono).HasMaxLength(10);

            });


            base.OnModelCreating(modelBuilder);
        }
    }
}
