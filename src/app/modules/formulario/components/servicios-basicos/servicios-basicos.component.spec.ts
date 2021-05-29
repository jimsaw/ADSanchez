import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ServiciosBasicosComponent } from './servicios-basicos.component';

describe('ServiciosBasicosComponent', () => {
  let component: ServiciosBasicosComponent;
  let fixture: ComponentFixture<ServiciosBasicosComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ServiciosBasicosComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ServiciosBasicosComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
