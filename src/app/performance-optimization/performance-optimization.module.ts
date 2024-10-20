import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { PerformanceOptimizationPageRoutingModule } from './performance-optimization-routing.module';

import { PerformanceOptimizationPage } from './performance-optimization.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    PerformanceOptimizationPageRoutingModule
  ],
  declarations: [PerformanceOptimizationPage]
})
export class PerformanceOptimizationPageModule {}
