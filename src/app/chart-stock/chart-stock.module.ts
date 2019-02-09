import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';

import { HighchartsChartModule } from 'highcharts-angular';
import { ChartStockRoutingModule } from './chart-stock-routing.module';
import { ChartStockComponent } from './chart-stock/chart-stock.component';
// import { ChartDepthComponent } from './chart-depth/chart-depth.component';

@NgModule({
  declarations: [ChartStockComponent],
  imports: [
    CommonModule,
    ChartStockRoutingModule,
    HighchartsChartModule,
    HttpClientModule
  ]
})
export class ChartStockModule {}
