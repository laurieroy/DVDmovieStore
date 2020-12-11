﻿// <auto-generated />
using System;
using Microsoft.EntityFrameworkCore;
using Microsoft.EntityFrameworkCore.Infrastructure;
using Microsoft.EntityFrameworkCore.Metadata;
using Microsoft.EntityFrameworkCore.Migrations;
using Microsoft.EntityFrameworkCore.Storage.ValueConversion;
using Models;

namespace DVDMovieStore.Migrations
{
    [DbContext(typeof(DataContext))]
    [Migration("20201210052520_AddInitial")]
    partial class AddInitial
    {
        protected override void BuildTargetModel(ModelBuilder modelBuilder)
        {
#pragma warning disable 612, 618
            modelBuilder
                .HasAnnotation("ProductVersion", "2.1.14-servicing-32113")
                .HasAnnotation("Relational:MaxIdentifierLength", 128)
                .HasAnnotation("SqlServer:ValueGenerationStrategy", SqlServerValueGenerationStrategy.IdentityColumn);

            modelBuilder.Entity("Models.Movie", b =>
                {
                    b.Property<long>("MovieId")
                        .ValueGeneratedOnAdd()
                        .HasAnnotation("SqlServer:ValueGenerationStrategy", SqlServerValueGenerationStrategy.IdentityColumn);

                    b.Property<string>("Category");

                    b.Property<string>("Description");

                    b.Property<string>("Image");

                    b.Property<string>("Name");

                    b.Property<decimal>("Price");

                    b.Property<long?>("StudioId");

                    b.HasKey("MovieId");

                    b.HasIndex("StudioId");

                    b.ToTable("Movies");
                });

            modelBuilder.Entity("Models.Rating", b =>
                {
                    b.Property<long>("RatingId")
                        .ValueGeneratedOnAdd()
                        .HasAnnotation("SqlServer:ValueGenerationStrategy", SqlServerValueGenerationStrategy.IdentityColumn);

                    b.Property<long?>("MovieId");

                    b.Property<int>("Stars");

                    b.HasKey("RatingId");

                    b.HasIndex("MovieId");

                    b.ToTable("Ratings");
                });

            modelBuilder.Entity("Models.Studio", b =>
                {
                    b.Property<long>("StudioId")
                        .ValueGeneratedOnAdd()
                        .HasAnnotation("SqlServer:ValueGenerationStrategy", SqlServerValueGenerationStrategy.IdentityColumn);

                    b.Property<string>("City");

                    b.Property<string>("Name");

                    b.Property<string>("State");

                    b.HasKey("StudioId");

                    b.ToTable("Studios");
                });

            modelBuilder.Entity("Models.Movie", b =>
                {
                    b.HasOne("Models.Studio", "Studio")
                        .WithMany("Movies")
                        .HasForeignKey("StudioId");
                });

            modelBuilder.Entity("Models.Rating", b =>
                {
                    b.HasOne("Models.Movie", "Movie")
                        .WithMany("Ratings")
                        .HasForeignKey("MovieId");
                });
#pragma warning restore 612, 618
        }
    }
}