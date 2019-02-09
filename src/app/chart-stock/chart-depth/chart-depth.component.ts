import { Component, OnInit } from '@angular/core';
import { depthOptions } from './depthOptions';
import { ChartStockService } from '../chart-stock.service';

import { ChartStockComponent } from '../chart-stock.component';

@Component({
  selector: 'app-chart-depth',
  templateUrl: './chart-depth.component.html',
  styleUrls: ['./chart-depth.component.scss']
})
export class ChartDepthComponent extends ChartStockComponent implements OnInit {
  isLoading = true;
  updateChart = false;

  constructor(private chartStockService: ChartStockService) {
    super();
    this.chartOptions = depthOptions;
  }

  ngOnInit() {
    this.chartStockService.getDepthData().subscribe(data => {
      this.chartOptions.series[0].data = data['bids'];
      this.chartOptions.series[1].data = data['asks'];
      this.chartOptions.xAxis.plotLines[0].value = data['currentValue'];
      this.isLoading = false;
    });
  }
}
