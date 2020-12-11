import { Component, OnInit } from '@angular/core';
import { Cart } from '../../models/cart.model';

@Component({
  selector: 'app-cart-detail',
  templateUrl: './cart-detail.component.html',
  styleUrls: ['./cart-detail.component.css']
})
export class CartDetailComponent {

  constructor(public cart: Cart) { }
}
