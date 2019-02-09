import { Component, OnInit } from '@angular/core';
import { depthOptions } from './depthOptions';
import { ChartStockService } from '../chart-stock.service';
/**
 * import * as Highcharts from 'highcharts/highstock' <---- Doesn't work know
 * insterd use:
 * import * as Highcharts from 'highcharts';
 * import StockModule from 'highcharts/modules/stock';
 */
import * as Highcharts from 'highcharts';
import StockModule from 'highcharts/modules/stock';

StockModule(Highcharts); // <-- Have to be first

@Component({
  selector: 'app-chart-depth',
  templateUrl: './chart-depth.component.html',
  styleUrls: ['./chart-depth.component.scss']
})
export class ChartDepthComponent implements OnInit {
  isLoading = false;
  // For all demos:
  Highcharts: typeof Highcharts = Highcharts; // Highcharts, it's Highcharts
  chartOptions = depthOptions;
  updateChart = false;

  constructor(private chartStockService: ChartStockService) {}

  ngOnInit() {
    this.chartStockService.getDepthData().subscribe(data => {
      // this.setChart(data);
      console.log(data);
    });
  }
}
