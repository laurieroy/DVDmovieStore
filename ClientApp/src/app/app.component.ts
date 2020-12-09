import { Component } from '@angular/core';
import { Movie } from './models/movie.model';
import { Repository } from './models/repository';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'the DVD store';
  constructor(private repo: Repository) {}
  get movie(): Movie {
    return this.repo.movie;
  }
}
