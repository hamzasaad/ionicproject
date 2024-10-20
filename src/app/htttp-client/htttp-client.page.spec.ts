import { ComponentFixture, TestBed } from '@angular/core/testing';
import { HtttpClientPage } from './htttp-client.page';

describe('HtttpClientPage', () => {
  let component: HtttpClientPage;
  let fixture: ComponentFixture<HtttpClientPage>;

  beforeEach(() => {
    fixture = TestBed.createComponent(HtttpClientPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
