import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { HtttpClientPageRoutingModule } from './htttp-client-routing.module';

import { HtttpClientPage } from './htttp-client.page';
import { HttpClientModule } from '@angular/common/http'; 


@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    HtttpClientPageRoutingModule,
    HttpClientModule
  ],
  declarations: [HtttpClientPage]
})
export class HtttpClientPageModule {}
