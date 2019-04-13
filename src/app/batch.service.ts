import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http'
import { Batch } from './models/batch';
import { Order } from './models/order';
import { Batch_Orders } from './models/batch_orders';

@Injectable({
  providedIn: 'root'
})
export class BatchService {

  constructor(private http: HttpClient) { }

  getBatches() {
    let response = this.http.get('https://cannopy.herokuapp.com/batches');

    return response
  }

  getOrders() {
    let response = this.http.get('https://cannopy.herokuapp.com/orders');
    return response
  }

  getBatchOrder(id) {
    let response = this.http.get(`https://cannopy.herokuapp.com/batches_orders/${id}`);
    return response
  }
}
