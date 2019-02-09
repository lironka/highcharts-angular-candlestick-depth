import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { DepthPageComponent } from './depth-page.component';

const routes: Routes = [
  {
    path: '',
    component: DepthPageComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class DepthPageRoutingModule {}
