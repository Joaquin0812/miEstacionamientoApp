import { ComponentFixture, TestBed } from '@angular/core/testing';
import { MapaEstacionamientoPage } from './mapa-estacionamiento.page';

describe('MapaEstacionamientoPage', () => {
  let component: MapaEstacionamientoPage;
  let fixture: ComponentFixture<MapaEstacionamientoPage>;

  beforeEach(async(() => {
    fixture = TestBed.createComponent(MapaEstacionamientoPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
