import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ChartStockComponent } from './chart-stock/chart-stock.component';

const routes: Routes = [
  {
    path: '',
    component: ChartStockComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ChartStockRoutingModule {}
