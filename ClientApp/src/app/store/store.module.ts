import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { CategoryFilterComponent } from '../structure/movie-table/categoryFilter.component';
import { CartSummaryComponent } from './cart-summary/cart-summary.component';
import { MovieListComponent } from './movie-list/movie-list.component';
import { MovieSelectionComponent } from './movie-selection/movie-selection.component';
import { PaginationComponent } from './pagination/pagination.component';
import { RatingsComponent } from './ratings/ratings.component';
import { CartDetailComponent } from './cart-detail/cart-detail.component';
import { FormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';
import { CheckoutDetailsComponent } from './checkout/checkoutDetails/checkoutDetails.component';
import { CheckoutSummaryComponent } from './checkout/checkoutDetails/checkout-summary/checkout-summary.component';
import { CheckoutPaymentComponent } from './checkout/checkoutDetails/checkoutPayment/checkoutPayment.component';
import { OrderConfirmationComponent } from './checkout/checkoutDetails/orderConfirmation/orderConfirmation.component';

@NgModule({
  declarations: [
    CartSummaryComponent,
    CategoryFilterComponent,
    PaginationComponent,
    MovieListComponent,
    MovieSelectionComponent,
    RatingsComponent,
    CartDetailComponent,
    CheckoutDetailsComponent,
    CheckoutSummaryComponent,
    CheckoutPaymentComponent,
    OrderConfirmationComponent
  ],
  imports: [ BrowserModule, FormsModule, RouterModule],
  exports: [MovieSelectionComponent]
})
export class StoreModule {}
