import { ComponentFixture, TestBed } from '@angular/core/testing';
import { ConsultarEstacionamientosPage } from './consultar-estacionamientos.page';

describe('ConsultarEstacionamientosPage', () => {
  let component: ConsultarEstacionamientosPage;
  let fixture: ComponentFixture<ConsultarEstacionamientosPage>;

  beforeEach(async(() => {
    fixture = TestBed.createComponent(ConsultarEstacionamientosPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
