import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { DependencyInjectionPage } from './dependency-injection.page';

const routes: Routes = [
  {
    path: '',
    component: DependencyInjectionPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class DependencyInjectionPageRoutingModule {}
