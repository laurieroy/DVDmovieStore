import { Component } from '@angular/core';
import { Movie } from '../../models/movie.model';
import { Repository } from '../../models/repository';

@Component({
  selector: 'admin-movie-admin',
  templateUrl: './movie-admin.component.html',
  styleUrls: ['./movie-admin.component.css']
})
export class MovieAdminComponent {
  tableMode = true;
  get movie(): Movie {
    return this.repo.movie;
  }
  
  constructor(private repo: Repository) { }

  selectMovie(id: number) {
    this.repo.getMovie(id);
  }

  saveMovie() {
    if (this.repo.movie.movieId == null) {
      this.repo.createMovie(this.repo.movie);
    } else {
      this.repo.replaceMovie(this.repo.movie);
    }
    this.clearMovie();
    this.tableMode = true;
  }

  deleteMovie(id: number) {
    this.repo.deleteMovie(id);
  }

  clearMovie() {
    this.repo.movie = new Movie();
    this.tableMode = true;
  }

  get movies(): Movie[] {
    return this.repo.movies;
  }
}
