import { Component, OnInit } from '@angular/core';
import { Cart } from '../../models/cart.model';

@Component({
  selector: 'app-cart-summary',
  templateUrl: './cart-summary.component.html',
  styleUrls: ['./cart-summary.component.css']
})
export class CartSummaryComponent {

  constructor(private cart: Cart) { }

  get itemCount(): number {
    return this.cart.itemCount;
  }

  get totalPrice(): number {
    return this.cart.totalPrice;
  }
}
