import { ComponentFixture, TestBed } from '@angular/core/testing';
import { PerformanceOptimizationPage } from './performance-optimization.page';

describe('PerformanceOptimizationPage', () => {
  let component: PerformanceOptimizationPage;
  let fixture: ComponentFixture<PerformanceOptimizationPage>;

  beforeEach(() => {
    fixture = TestBed.createComponent(PerformanceOptimizationPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
