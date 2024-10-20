import { ComponentFixture, TestBed } from '@angular/core/testing';
import { InternationalizationPage } from './internationalization.page';

describe('InternationalizationPage', () => {
  let component: InternationalizationPage;
  let fixture: ComponentFixture<InternationalizationPage>;

  beforeEach(() => {
    fixture = TestBed.createComponent(InternationalizationPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
