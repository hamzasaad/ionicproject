import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { DependencyInjectionPageRoutingModule } from './dependency-injection-routing.module';

import { DependencyInjectionPage } from './dependency-injection.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    DependencyInjectionPageRoutingModule
  ],
  declarations: [DependencyInjectionPage]
})
export class DependencyInjectionPageModule {}
