import { Inject, Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Movie } from './movie.model';

const moviesUrl = '/api/movies';
@Injectable()
export class Repository {

  public movie: Movie;
  constructor(private http: HttpClient, @Inject('BASE_URL') baseUrl: string) {
    http.get<Movie>(baseUrl + 'api/movies/GetMovie')
      .subscribe((result) => {
        this.movie = result;
      },
      (error) => console.error(error)
    );
    this.getMovie(3);
  }

  getMovie(id: number) {
    // console.log("Movie Data Requested");
    return this.http.get(moviesUrl + '/' + id)
      .subscribe(response => { this.movie = response; });
  }
}
