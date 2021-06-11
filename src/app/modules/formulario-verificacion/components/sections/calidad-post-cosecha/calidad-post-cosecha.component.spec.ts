import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CalidadPostCosechaComponent } from './calidad-post-cosecha.component';

describe('CalidadPostCosechaComponent', () => {
  let component: CalidadPostCosechaComponent;
  let fixture: ComponentFixture<CalidadPostCosechaComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CalidadPostCosechaComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CalidadPostCosechaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
