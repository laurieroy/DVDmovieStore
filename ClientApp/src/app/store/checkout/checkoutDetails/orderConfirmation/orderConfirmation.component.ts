import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Order } from '../../../../models/order.model';

@Component({
  selector: 'app-order-confirmation',
  templateUrl: './orderConfirmation.component.html',
  styleUrls: ['./orderConfirmation.component.css']
})
export class OrderConfirmationComponent  {

  constructor(private router: Router, public order: Order) {
    if (!order.submitted) {
      router.navigateByUrl('/checkout/step3');
    }
   }
}
