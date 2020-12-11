import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { Movie } from '../../models/movie.model';
import { Repository } from '../../models/repository';

@Component({
  selector: 'app-movie-table',
  templateUrl: './movie-table.component.html',
  styleUrls: ['./movie-table.component.css']
})
export class MovieTableComponent {

  constructor(private repo: Repository, private router: Router) { }

  get movies(): Movie[] {
    return this.repo.movies;
  }

  selectMovie(id: number) {
    this.repo.getMovie(id);
    this.router.navigateByUrl('/detail');
  }

}
