import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { StateManagementPage } from './state-management.page';

const routes: Routes = [
  {
    path: '',
    component: StateManagementPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class StateManagementPageRoutingModule {}
