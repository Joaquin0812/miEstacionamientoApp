import { ComponentFixture, TestBed } from '@angular/core/testing';
import { ReservarEstacionamientoPage } from './reservar-estacionamiento.page';

describe('ReservarEstacionamientoPage', () => {
  let component: ReservarEstacionamientoPage;
  let fixture: ComponentFixture<ReservarEstacionamientoPage>;

  beforeEach(async(() => {
    fixture = TestBed.createComponent(ReservarEstacionamientoPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
