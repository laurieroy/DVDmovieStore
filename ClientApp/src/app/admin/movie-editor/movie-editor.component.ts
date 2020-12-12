import { Component, OnInit } from '@angular/core';
import { Movie } from '../../models/movie.model';
import { Repository } from '../../models/repository';
import { Studio } from '../../models/studio.model';

@Component({
  selector: 'admin-movie-editor',
  templateUrl: './movie-editor.component.html',
  styleUrls: ['./movie-editor.component.css']
})
export class MovieEditorComponent {

  constructor(private repo: Repository) { }
  get movie(): Movie {
    return this.repo.movie;
  }

  get studios(): Studio[] {
    return this.repo.studios;
  }

  compareStudios(s1: Studio, s2: Studio) {
    return s1 && s2 && s1.name == s2.name;
  }
}
