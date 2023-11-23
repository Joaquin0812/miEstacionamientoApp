import { ComponentFixture, TestBed } from '@angular/core/testing';
import { CalificarClientePage } from './calificar-cliente.page';

describe('CalificarClientePage', () => {
  let component: CalificarClientePage;
  let fixture: ComponentFixture<CalificarClientePage>;

  beforeEach(async(() => {
    fixture = TestBed.createComponent(CalificarClientePage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
