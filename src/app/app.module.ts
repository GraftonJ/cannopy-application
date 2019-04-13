import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {HttpClientModule} from '@angular/common/http';
import {FormsModule}   from '@angular/forms';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

import { MatToolbarModule, MatTabsModule } from '@angular/material';
import { BatchComponent } from './batch/batch.component'
import { BatchService } from './batch.service';
import { OrderComponent } from './order/order.component';
import { BatchOrdersComponent } from './batch-orders/batch-orders.component'

@NgModule({
  declarations: [
    AppComponent,
    BatchComponent,
    OrderComponent,
    BatchOrdersComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    MatToolbarModule,
    MatTabsModule,
    HttpClientModule,
    FormsModule
  ],
  providers: [ BatchService],
  bootstrap: [AppComponent]
})
export class AppModule { }
