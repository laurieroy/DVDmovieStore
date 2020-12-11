import { Component, OnInit } from '@angular/core';
import { Movie } from '../../models/movie.model';
import { Repository } from '../../models/repository';

@Component({
  selector: 'app-movie-detail',
  templateUrl: './movie-detail.component.html',
  styleUrls: ['./movie-detail.component.css']
})
export class MovieDetailComponent {

  constructor(private repo: Repository) { }

  get movie(): Movie {
    return this.repo.movie;
  }

}
