import { ComponentFixture, TestBed } from '@angular/core/testing';
import { HistorialArrendatariosPage } from './historial-arrendatarios.page';

describe('HistorialArrendatariosPage', () => {
  let component: HistorialArrendatariosPage;
  let fixture: ComponentFixture<HistorialArrendatariosPage>;

  beforeEach(async(() => {
    fixture = TestBed.createComponent(HistorialArrendatariosPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
