import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { PerformanceOptimizationPage } from './performance-optimization.page';

const routes: Routes = [
  {
    path: '',
    component: PerformanceOptimizationPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class PerformanceOptimizationPageRoutingModule {}
