import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { InternationalizationPage } from './internationalization.page';

const routes: Routes = [
  {
    path: '',
    component: InternationalizationPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class InternationalizationPageRoutingModule {}
