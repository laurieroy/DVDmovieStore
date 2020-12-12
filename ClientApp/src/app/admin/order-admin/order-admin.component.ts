import { Component, OnInit } from '@angular/core';
import { Order } from '../../models/order.model';
import { Repository } from '../../models/repository';

@Component({
  selector: 'app-order-admin',
  templateUrl: './order-admin.component.html',
  styleUrls: ['./order-admin.component.css']
})
export class OrderAdminComponent  {

  constructor(private repo: Repository) { }
  get orders(): Order[] {
    return this.repo.orders;
  }

  markShipped(order: Order) {
    this.repo.shipOrder(order);
  }
}
