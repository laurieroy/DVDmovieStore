import { Inject, Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Filter } from './configClasses.repository';
import { Movie } from './movie.model';
import { Studio } from './studio.model';

const studiosUrl = '/api/studios';
const moviesUrl = '/api/movies';
@Injectable()
export class Repository {
  movie: Movie;
  movies: Movie[];
  studios: Studio[] = [];
  private filterObject = new Filter();

  constructor(private http: HttpClient) {
    // this.filter.category = 'drama';
    this.filter.related = true;
    this.getMovies();
  }
  get filter(): Filter {
    return this.filterObject;
  }

  getMovie(id: number) {
    // console.log("Movie Data Requested");
    return this.http.get(moviesUrl + '/' + id).subscribe((response) => {
      this.movie = response;
    });
  }

  getMovies(related = false) {
    let url = moviesUrl + '?related=' + this.filter.related;
    if (this.filter.category) {
      url += '&category=' + this.filter.category;
    }
    if (this.filter.search) {
      url += '&search=' + this.filter.search;
    }

    this.http
      .get<Movie[]>(url)
      .subscribe((response) => (this.movies = response));
  }

  getStudios() {
    this.http
      .get<Studio[]>(studiosUrl)
      .subscribe((response) => (this.studios = response));
  }

  createMovie(mov: Movie) {
    const data = {
      Image: mov.image,
      name: mov.name,
      category: mov.category,
      description: mov.description,
      price: mov.price,
      studio: mov.studio ? mov.studio.studioId : 0,
    };
    this.http.post<number>(moviesUrl, data).subscribe((response) => {
      mov.movieId = response;
      this.movies.push(mov);
    });
  }

  createMovieAndStudio(mov: Movie, stu: Studio) {
    const data = {
      name: stu.name,
      city: stu.city,
      state: stu.state,
    };
    this.http.post<number>(studiosUrl, data).subscribe((response) => {
      stu.studioId = response;
      mov.studio = stu;
      this.studios.push(stu);
      if (mov != null) {
        this.createMovie(mov);
      }
    });
  }

  replaceMovie(mov: Movie) {
    const data = {
      image: mov.image,
      name: mov.name,
      category: mov.category,
      description: mov.description,
      price: mov.price,
      studio: mov.studio ? mov.studio.studioId : 0,
    };
    this.http
      .put(moviesUrl + '/' + mov.movieId, data)
      .subscribe((response) => this.getMovies());
  }

  replaceStudio(stu: Studio) {
    const data = {
      name: stu.name,
      city: stu.city,
      state: stu.state,
    };
    this.http
      .put(studiosUrl + '/' + stu.studioId, data)
      .subscribe((response) => this.getMovies());
  }

  updateMovie(id: number, changes: Map<string, any>) {
    const patch = [];
    changes.forEach((value, key) =>
      patch.push({ op: 'replace', path: key, value: value })
    );
    this.http
      .patch(moviesUrl + '/' + id, patch)
      .subscribe((response) => this.getMovies());
  }

  deleteMovie(id: number) {
    this.http.delete(moviesUrl + '/' + id)
      .subscribe(response => this.getMovies());
  }

  deleteStudio(id: number) {
    this.http.delete(studiosUrl + '/' + id)
      .subscribe(response => {
        this.getMovies();
        this.getStudios();
      });
  }
}
