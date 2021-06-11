import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ProteccionAreasRibereniasComponent } from './proteccion-areas-riberenias.component';

describe('ProteccionAreasRibereniasComponent', () => {
  let component: ProteccionAreasRibereniasComponent;
  let fixture: ComponentFixture<ProteccionAreasRibereniasComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ProteccionAreasRibereniasComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ProteccionAreasRibereniasComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
