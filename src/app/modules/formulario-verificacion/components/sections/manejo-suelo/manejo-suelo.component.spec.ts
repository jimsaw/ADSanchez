import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ManejoSueloComponent } from './manejo-suelo.component';

describe('ManejoSueloComponent', () => {
  let component: ManejoSueloComponent;
  let fixture: ComponentFixture<ManejoSueloComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ManejoSueloComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ManejoSueloComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
