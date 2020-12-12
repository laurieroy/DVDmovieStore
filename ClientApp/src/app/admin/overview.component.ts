import { Component, OnInit } from '@angular/core';
import { Movie } from '../models/movie.model';
import { Order } from '../models/order.model';
import { Repository } from '../models/repository';

@Component({
  selector: 'app-admin-overview',
  templateUrl: './overview.component.html'
})
export class OverviewComponent {
  constructor(private repo: Repository) {}

  get movies(): Movie[] {
    return this.repo.movies;
  }

  get orders(): Order[] {
    return this.repo.orders;
  }
}
