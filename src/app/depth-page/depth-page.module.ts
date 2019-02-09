import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { DepthPageRoutingModule } from './depth-page-routing.module';
import { DepthPageComponent } from './depth-page.component';
import { ChartStockModule } from '../chart-stock/chart-stock.module';

@NgModule({
  declarations: [DepthPageComponent],
  imports: [CommonModule, DepthPageRoutingModule, ChartStockModule]
})
export class DepthPageModule {}
