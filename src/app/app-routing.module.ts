import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { BothChartComponent } from './both-chart/both-chart.component';
import { MarketPageComponent } from './market-page/market-page.component';

const routes: Routes = [
  {
    path: '',
    redirectTo: '/both',
    pathMatch: 'full'
  },
  {
    path: 'both',
    component: BothChartComponent
  },
  {
    path: 'chart',
    component: MarketPageComponent
  },
  {
    path: 'depth',
    loadChildren: './depth-page/depth-page.module#DepthPageModule'
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {}
