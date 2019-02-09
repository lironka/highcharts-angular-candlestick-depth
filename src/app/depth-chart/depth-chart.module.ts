import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { DepthChartRoutingModule } from './depth-chart-routing.module';
import { ChartDepthComponent } from './chart-depth/chart-depth.component';
import { HighchartsChartModule } from 'highcharts-angular';
import { HttpClientModule } from '@angular/common/http';

@NgModule({
  declarations: [ChartDepthComponent],
  imports: [
    CommonModule,
    DepthChartRoutingModule,
    HighchartsChartModule,
    HttpClientModule
  ]
})
export class DepthChartModule {}
