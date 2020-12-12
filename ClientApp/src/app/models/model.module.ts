import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Repository } from './repository';
import { Cart } from './cart.model';
import { Order } from './order.model';

@NgModule({
  imports: [
    CommonModule
  ],
  declarations: [],
  providers: [Repository, Cart, Order]
})
export class ModelModule { }
