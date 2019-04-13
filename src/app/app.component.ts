import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'Cannopy Code Test';
  view = 'batches'

  onClickBatches(){
    this.view = 'batches'
  }

  onClickOrders(){
    this.view = 'orders'
  }

}
