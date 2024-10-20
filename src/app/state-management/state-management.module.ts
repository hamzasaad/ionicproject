import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { StateManagementPageRoutingModule } from './state-management-routing.module';

import { StateManagementPage } from './state-management.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    StateManagementPageRoutingModule
  ],
  declarations: [StateManagementPage]
})
export class StateManagementPageModule {}
