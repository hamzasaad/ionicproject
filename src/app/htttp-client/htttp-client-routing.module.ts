import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { HtttpClientPage } from './htttp-client.page';

const routes: Routes = [
  {
    path: '',
    component: HtttpClientPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class HtttpClientPageRoutingModule {}
