import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DiversificacionIngresosComponent } from './diversificacion-ingresos.component';

describe('DiversificacionIngresosComponent', () => {
  let component: DiversificacionIngresosComponent;
  let fixture: ComponentFixture<DiversificacionIngresosComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DiversificacionIngresosComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(DiversificacionIngresosComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
