import { Component, OnInit } from '@angular/core';
import { candleOptions } from './candleOptions';

import { ChartStockService } from '../chart-stock.service';

import { ChartStockComponent } from '../chart-stock.component';

@Component({
  selector: 'app-chart-market',
  templateUrl: './chart-market.component.html',
  styleUrls: ['./chart-market.component.scss']
})
export class ChartMarketComponent extends ChartStockComponent
  implements OnInit {
  isLoading = true;
  updateChart = false;

  constructor(private chartStockService: ChartStockService) {
    super();
    this.chartOptions = candleOptions;
  }

  ngOnInit() {
    this.chartStockService.getCandleData().subscribe(data => {
      this.setChart(data);
    });
  }

  setChart(chartDate: any) {
    const formData = this.formattingData(chartDate);
    this.chartOptions.series[0].data = formData.ohlc;
    this.chartOptions.series[1].data = formData.volume;
    this.isLoading = false;
    // trigger ngOnChanges
    this.updateChart = true;
  }

  formattingData(data: number[][]) {
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
