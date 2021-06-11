import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FertilizacionComponent } from './fertilizacion.component';

describe('FertilizacionComponent', () => {
  let component: FertilizacionComponent;
  let fixture: ComponentFixture<FertilizacionComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ FertilizacionComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(FertilizacionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
