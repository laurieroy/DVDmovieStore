import { Component, Input, OnInit } from '@angular/core';
import { Movie } from '../../models/movie.model';

@Component({
  selector: 'app-ratings',
  templateUrl: './ratings.component.html',
  styleUrls: ['./ratings.component.css'],
})
export class RatingsComponent {
  @Input()
  movie: Movie;
  get stars(): boolean[] {
    if (this.movie != null && this.movie.ratings != null) {
      const total = this.movie.ratings
        .map((r) => r.stars)
        .reduce((prev, curr) => prev + curr, 0);
      const count = Math.round(total / this.movie.ratings.length);
      return Array(5)
        .fill(false)
        .map((value, index) => {
          return index < count;
        });
    } else {
      return [];
    }
  }
}
