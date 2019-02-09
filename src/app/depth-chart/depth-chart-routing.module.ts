import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ChartDepthComponent } from './chart-depth/chart-depth.component';

const routes: Routes = [
  {
    path: '',
    component: ChartDepthComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class DepthChartRoutingModule {}
