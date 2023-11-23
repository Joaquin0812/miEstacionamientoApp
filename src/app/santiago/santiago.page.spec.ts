import { ComponentFixture, TestBed } from '@angular/core/testing';
import { SantiagoPage } from './santiago.page';

describe('SantiagoPage', () => {
  let component: SantiagoPage;
  let fixture: ComponentFixture<SantiagoPage>;

  beforeEach(async(() => {
    fixture = TestBed.createComponent(SantiagoPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
