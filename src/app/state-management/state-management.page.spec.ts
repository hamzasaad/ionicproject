import { ComponentFixture, TestBed } from '@angular/core/testing';
import { StateManagementPage } from './state-management.page';

describe('StateManagementPage', () => {
  let component: StateManagementPage;
  let fixture: ComponentFixture<StateManagementPage>;

  beforeEach(() => {
    fixture = TestBed.createComponent(StateManagementPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
