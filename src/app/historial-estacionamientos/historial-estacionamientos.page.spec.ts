import { ComponentFixture, TestBed } from '@angular/core/testing';
import { HistorialEstacionamientosPage } from './historial-estacionamientos.page';

describe('HistorialEstacionamientosPage', () => {
  let component: HistorialEstacionamientosPage;
  let fixture: ComponentFixture<HistorialEstacionamientosPage>;

  beforeEach(async(() => {
    fixture = TestBed.createComponent(HistorialEstacionamientosPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
