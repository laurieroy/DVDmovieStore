import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Movie } from '../../models/movie.model';
import { Repository } from '../../models/repository';

@Component({
  selector: 'app-movie-detail',
  templateUrl: './movie-detail.component.html',
  styleUrls: ['./movie-detail.component.css']
})
export class MovieDetailComponent {

  constructor(private repo: Repository, private router: Router,
      private activeRoute: ActivatedRoute) {
        const id = Number.parseInt(activeRoute.snapshot.params['id']);
        if (id) {
          this.repo.getMovie(id);
        } else {
          router.navigateByUrl('/');
        }
       }

  get movie(): Movie {
    return this.repo.movie;
  }

}
