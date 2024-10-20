import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { InternationalizationPageRoutingModule } from './internationalization-routing.module';

import { InternationalizationPage } from './internationalization.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    InternationalizationPageRoutingModule
  ],
  declarations: [InternationalizationPage]
})
export class InternationalizationPageModule {}
