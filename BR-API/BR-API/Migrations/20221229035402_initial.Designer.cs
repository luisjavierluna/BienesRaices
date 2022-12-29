﻿// <auto-generated />
using System;
using BR_API;
using Microsoft.EntityFrameworkCore;
using Microsoft.EntityFrameworkCore.Infrastructure;
using Microsoft.EntityFrameworkCore.Metadata;
using Microsoft.EntityFrameworkCore.Migrations;
using Microsoft.EntityFrameworkCore.Storage.ValueConversion;

#nullable disable

namespace BR_API.Migrations
{
    [DbContext(typeof(ApplicationDbContext))]
    [Migration("20221229035402_initial")]
    partial class initial
    {
        protected override void BuildTargetModel(ModelBuilder modelBuilder)
        {
#pragma warning disable 612, 618
            modelBuilder
                .HasAnnotation("ProductVersion", "6.0.12")
                .HasAnnotation("Relational:MaxIdentifierLength", 128);

            SqlServerModelBuilderExtensions.UseIdentityColumns(modelBuilder, 1L, 1);

            modelBuilder.Entity("BR_API.Entities.Propiedad", b =>
                {
                    b.Property<int>("Id")
                        .ValueGeneratedOnAdd()
                        .HasColumnType("int");

                    SqlServerPropertyBuilderExtensions.UseIdentityColumn(b.Property<int>("Id"), 1L, 1);

                    b.Property<DateTime>("Creado")
                        .HasColumnType("datetime2");

                    b.Property<string>("Descripcion")
                        .HasColumnType("nvarchar(max)");

                    b.Property<int>("Estacionamiento")
                        .HasPrecision(1)
                        .HasColumnType("int");

                    b.Property<int>("Habitaciones")
                        .HasPrecision(1)
                        .HasColumnType("int");

                    b.Property<string>("Imagen")
                        .HasMaxLength(200)
                        .HasColumnType("nvarchar(200)");

                    b.Property<decimal>("Precio")
                        .HasPrecision(10, 2)
                        .HasColumnType("decimal(10,2)");

                    b.Property<string>("Titulo")
                        .HasMaxLength(45)
                        .HasColumnType("nvarchar(45)");

                    b.Property<int>("VendedorId")
                        .HasColumnType("int");

                    b.Property<int>("WC")
                        .HasPrecision(1)
                        .HasColumnType("int");

                    b.HasKey("Id");

                    b.HasIndex("VendedorId")
                        .IsUnique();

                    b.ToTable("Propiedades", (string)null);
                });

            modelBuilder.Entity("BR_API.Entities.Vendedor", b =>
                {
                    b.Property<int>("Id")
                        .ValueGeneratedOnAdd()
                        .HasColumnType("int");

                    SqlServerPropertyBuilderExtensions.UseIdentityColumn(b.Property<int>("Id"), 1L, 1);

                    b.Property<string>("Apellido")
                        .HasMaxLength(45)
                        .HasColumnType("nvarchar(45)");

                    b.Property<string>("Nombre")
                        .HasMaxLength(45)
                        .HasColumnType("nvarchar(45)");

                    b.Property<string>("Telefono")
                        .HasMaxLength(10)
                        .HasColumnType("nvarchar(10)");

                    b.HasKey("Id");

                    b.ToTable("Vendedores", (string)null);
                });

            modelBuilder.Entity("BR_API.Entities.Propiedad", b =>
                {
                    b.HasOne("BR_API.Entities.Vendedor", "Vendedor")
                        .WithOne("Propiedad")
                        .HasForeignKey("BR_API.Entities.Propiedad", "VendedorId")
                        .OnDelete(DeleteBehavior.Restrict)
                        .IsRequired();

                    b.Navigation("Vendedor");
                });

            modelBuilder.Entity("BR_API.Entities.Vendedor", b =>
                {
                    b.Navigation("Propiedad");
                });
#pragma warning restore 612, 618
        }
    }
}
