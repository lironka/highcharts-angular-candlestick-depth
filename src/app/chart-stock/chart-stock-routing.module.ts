import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ChartStockComponent } from './chart-stock/chart-stock.component';
// import { ChartDepthComponent } from './chart-depth/chart-depth.component';

const routes: Routes = [
  {
    path: '',
    component: ChartStockComponent
  }
  // {
  //   path: 'depth',
  //   component: ChartDepthComponent
  // }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ChartStockRoutingModule {}
