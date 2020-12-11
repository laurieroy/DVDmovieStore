import { Component, OnInit } from '@angular/core';
import { Movie } from '../../models/movie.model';
import { Repository } from '../../models/repository';

@Component({
  selector: 'app-movie-list',
  templateUrl: './movie-list.component.html',
  styleUrls: ['./movie-list.component.css']
})
export class MovieListComponent {

  constructor(private repo: Repository) { }

  get movies(): Movie[] {
    return this.repo.movies;
  }

}
