import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { CategoryFilterComponent } from '../structure/movie-table/categoryFilter.component';
import { CartSummaryComponent } from './cart-summary/cart-summary.component';
import { MovieListComponent } from './movie-list/movie-list.component';
import { MovieSelectionComponent } from './movie-selection/movie-selection.component';
import { PaginationComponent } from './pagination/pagination.component';
import { RatingsComponent } from './ratings/ratings.component';

@NgModule({
  declarations: [
    CartSummaryComponent,
    CategoryFilterComponent,
    PaginationComponent,
    MovieListComponent,
    MovieSelectionComponent,
    RatingsComponent
  ],
  imports: [ BrowserModule],
  exports: [MovieSelectionComponent]
})
export class StoreModule {}
