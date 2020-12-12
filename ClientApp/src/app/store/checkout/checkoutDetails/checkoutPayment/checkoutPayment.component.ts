import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Order } from '../../../../models/order.model';

@Component({
  selector: 'app-checkout-payment',
  templateUrl: './checkoutPayment.component.html',
  styleUrls: ['./checkoutPayment.component.css']
})
export class CheckoutPaymentComponent {
  constructor(private router: Router, public order: Order) {
    if (order.name == null || order.address == null) {
      router.navigateByUrl('/checkout/step1');
    }
  }
}
