import { ComponentFixture, TestBed } from '@angular/core/testing';
import { CalificarEstacionamientoPage } from './calificar-estacionamiento.page';

describe('CalificarEstacionamientoPage', () => {
  let component: CalificarEstacionamientoPage;
  let fixture: ComponentFixture<CalificarEstacionamientoPage>;

  beforeEach(async(() => {
    fixture = TestBed.createComponent(CalificarEstacionamientoPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
