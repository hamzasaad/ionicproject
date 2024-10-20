import { ComponentFixture, TestBed } from '@angular/core/testing';
import { ObservablesPage } from './observables.page';

describe('ObservablesPage', () => {
  let component: ObservablesPage;
  let fixture: ComponentFixture<ObservablesPage>;

  beforeEach(() => {
    fixture = TestBed.createComponent(ObservablesPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
