import { Component, OnInit } from '@angular/core';
import { Order } from '../models/order'
import { BatchService } from '../batch.service'

@Component({
  selector: 'app-order',
  templateUrl: './order.component.html',
  styleUrls: ['./order.component.scss']
})
export class OrderComponent implements OnInit {
  orders: Order

  constructor(private batchService: BatchService) { }

  ngOnInit() {
    this.batchService.getOrders()
      .subscribe(
        (order: Order) => this.orders = order,
        (error) => console.log(error)
      )
  }

}
