import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Repository } from './repository';
import { Cart } from './cart.model';

@NgModule({
  imports: [
    CommonModule
  ],
  declarations: [],
  providers: [Repository, Cart]
})
export class ModelModule { }
