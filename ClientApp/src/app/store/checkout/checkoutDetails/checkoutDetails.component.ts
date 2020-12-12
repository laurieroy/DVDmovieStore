import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Order } from '../../../models/order.model';

@Component({
  selector: 'app-checkout-details',
  templateUrl: './checkoutDetails.component.html',
  styleUrls: ['./checkoutDetails.component.css']
})
export class CheckoutDetailsComponent {
  
  constructor(private router: Router,  public order: Order) {
    if (order.movies.length === 0) {
      this.router.navigateByUrl('/cart');
    }
   }
}
