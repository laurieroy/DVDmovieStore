import { Component, OnInit } from '@angular/core';
import { Repository } from '../models/repository';

@Component({
  selector: 'app-admin',
  templateUrl: './admin.component.html',
  styleUrls: ['./admin.component.css']
})
export class AdminComponent {

  constructor(private repo: Repository) {
    repo.filter.reset();
    repo.filter.related = true;
    this.repo.getMovies();
    this.repo.getStudios();
    this.repo.getOrders();
  }
}
