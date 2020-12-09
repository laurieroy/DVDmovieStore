import { Inject, Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Movie } from './movie.model';

@Injectable()
export class Repository {
  public movie: Movie;
  constructor(http: HttpClient, @Inject('BASE_URL') baseUrl: string) {
    http.get<Movie>(baseUrl + 'api/SampleData/GetMovie').subscribe(
      (result) => {
        this.movie = result;
      },
      (error) => console.error(error)
    );
  }
}
