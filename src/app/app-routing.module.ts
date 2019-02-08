import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

const routes: Routes = [
  {
    path: '',
    redirectTo: '/chart',
    pathMatch: 'full'
  },
  {
    path: 'chart',
    loadChildren: './chart-stock/chart-stock.module#ChartStockModule'
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {}
