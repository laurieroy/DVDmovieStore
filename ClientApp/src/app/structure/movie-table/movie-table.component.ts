import { Component } from '@angular/core';
import { Movie } from '../../models/movie.model';
import { Repository } from '../../models/repository';

@Component({
  selector: 'app-movie-table',
  templateUrl: './movie-table.component.html',
  styleUrls: ['./movie-table.component.css']
})
export class MovieTableComponent {

  constructor(private repo: Repository) { }

  get movies(): Movie[] {
    return this.repo.movies;
  }

  selectMovie(id: number) {
    this.repo.getMovie(id);
  }

}
