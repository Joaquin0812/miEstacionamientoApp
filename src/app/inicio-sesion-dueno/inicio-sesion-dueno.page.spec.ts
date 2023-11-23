import { ComponentFixture, TestBed } from '@angular/core/testing';
import { InicioSesionDuenoPage } from './inicio-sesion-dueno.page';

describe('InicioSesionDuenoPage', () => {
  let component: InicioSesionDuenoPage;
  let fixture: ComponentFixture<InicioSesionDuenoPage>;

  beforeEach(async(() => {
    fixture = TestBed.createComponent(InicioSesionDuenoPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
