import { Component, OnInit } from '@angular/core';
import { candleOptions } from './candleOptions';
/**
 * import * as Highcharts from 'highcharts/highstock' <---- Doesn't work know
 * insterd use:
 * import * as Highcharts from 'highcharts';
 * import StockModule from 'highcharts/modules/stock';
 */

import * as Highcharts from 'highcharts';
import StockModule from 'highcharts/modules/stock';
import ExportingModule from 'highcharts/modules/exporting';
import * as HIndicatorsAll from 'highcharts/indicators/indicators-all';
import HDragPanes from 'highcharts/modules/drag-panes';
import * as HAnnotationsAdvanced from 'highcharts/modules/annotations-advanced';
import * as HPriceIndicator from 'highcharts/modules/price-indicator';
import * as HFullScreen from 'highcharts/modules/full-screen';
import HStockTools from 'highcharts/modules/stock-tools';

import SunsetTheme from 'highcharts/themes/sunset';
import { ChartStockService } from '../chart-stock.service';

StockModule(Highcharts); // <-- Have to be first
ExportingModule(Highcharts);
HIndicatorsAll(Highcharts);
HDragPanes(Highcharts);
HAnnotationsAdvanced(Highcharts);
HPriceIndicator(Highcharts);
HFullScreen(Highcharts);
HStockTools(Highcharts);

SunsetTheme(Highcharts);

@Component({
  selector: 'app-chart-stock',
  templateUrl: './chart-stock.component.html',
  styleUrls: ['./chart-stock.component.scss']
})
export class ChartStockComponent implements OnInit {
  isLoading = true;
  // For all demos:
  Highcharts: typeof Highcharts = Highcharts; // Highcharts, it's Highcharts
  chartOptions = candleOptions;
  updateChart = false;

  constructor(private chartStockService: ChartStockService) {}

  ngOnInit() {
    this.chartStockService.getCandleData().subscribe(data => {
      this.setChart(data);
    });
  }

  setChart(chartDate) {
    const formData = this.formatedData(chartDate);
    this.chartOptions.series[0].data = formData.ohlc;
    this.chartOptions.series[1].data = formData.volume;
    this.isLoading = false;
    // trigger ngOnChanges
    this.updateChart = true;
  }

  formatedData(data: number[][]) {
    const ohlc = [];
    const volume = [];
    for (let i = 0; i < data.length; i += 1) {
      ohlc.push([
        data[i][0], // the date
        data[i][1], // open
        data[i][2], // high
        data[i][3], // low
        data[i][4] // close
      ]);

      volume.push([
        data[i][0], // the date
        data[i][5] // the volume
      ]);
    }
    return { ohlc, volume };
  }
}
