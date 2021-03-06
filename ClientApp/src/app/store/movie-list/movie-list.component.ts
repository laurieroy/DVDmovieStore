import { Component, OnInit } from '@angular/core';
import { Cart } from '../../models/cart.model';
import { Movie } from '../../models/movie.model';
import { Repository } from '../../models/repository';

@Component({
  selector: 'app-movie-list',
  templateUrl: './movie-list.component.html',
  styleUrls: ['./movie-list.component.css'],
})
export class MovieListComponent {
  constructor(private repo: Repository, private cart: Cart) {}

  get movies(): Movie[] {
    if (this.repo.movies != null && this.repo.movies.length > 0) {
      const pageIndex =
        (this.repo.pagination.currentPage - 1) *
        this.repo.pagination.moviesPerPage;
      return this.repo.movies.slice(
        pageIndex,
        pageIndex + this.repo.pagination.moviesPerPage
      );
    }
  }

  addToCart(movie: Movie) {
    this.cart.addMovie(movie);
  }
}
