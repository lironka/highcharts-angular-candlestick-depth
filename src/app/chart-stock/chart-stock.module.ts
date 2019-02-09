import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';

import { HighchartsChartModule } from 'highcharts-angular';
import { ChartMarketComponent } from './chart-market/chart-market.component';
import { ChartStockComponent } from './chart-stock.component';
import { ChartDepthComponent } from './chart-depth/chart-depth.component';

@NgModule({
  declarations: [
    ChartStockComponent,
    ChartMarketComponent,
    ChartDepthComponent
  ],
  imports: [CommonModule, HighchartsChartModule, HttpClientModule],
  exports: [ChartStockComponent, ChartMarketComponent, ChartDepthComponent]
})
export class ChartStockModule {}
