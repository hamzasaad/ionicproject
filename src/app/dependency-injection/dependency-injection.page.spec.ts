import { ComponentFixture, TestBed } from '@angular/core/testing';
import { DependencyInjectionPage } from './dependency-injection.page';

describe('DependencyInjectionPage', () => {
  let component: DependencyInjectionPage;
  let fixture: ComponentFixture<DependencyInjectionPage>;

  beforeEach(() => {
    fixture = TestBed.createComponent(DependencyInjectionPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
