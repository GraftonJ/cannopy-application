import { Component, OnInit } from '@angular/core';
import { Batch } from '../models/batch'
import { BatchService } from '../batch.service'
@Component({
  selector: 'app-batch',
  templateUrl: './batch.component.html',
  styleUrls: ['./batch.component.scss']
})
export class BatchComponent implements OnInit {
  batches: Batch

  constructor(private batchService: BatchService) { }

  ngOnInit() {
      this.batchService.getBatches()
        .subscribe(
          (batch: Batch) => this.batches = batch,
          (error) => console.log(error)
        )
    };

}
