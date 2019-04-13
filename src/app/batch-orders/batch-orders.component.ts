import { Component, OnInit } from '@angular/core';
import { Batch_Orders } from '../models/batch_orders';
import { BatchService } from '../batch.service';

@Component({
  selector: 'app-batch-orders',
  templateUrl: './batch-orders.component.html',
  styleUrls: ['./batch-orders.component.scss']
})
export class BatchOrdersComponent implements OnInit {
  orderId: number;
  batchOrders: Batch_Orders;

  constructor(private batchService: BatchService) { };

  ngOnInit() {

  }

  onGetBatches(){
    this.batchService.getBatchOrder(this.orderId)
    .subscribe(
      (batch_order: Batch_Orders) => this.batchOrders = batch_order,
      (error) => console.log(error)
    )
  }
};
