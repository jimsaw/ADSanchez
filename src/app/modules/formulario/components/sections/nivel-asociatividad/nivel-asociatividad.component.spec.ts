import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NivelAsociatividadComponent } from './nivel-asociatividad.component';

describe('NivelAsociatividadComponent', () => {
  let component: NivelAsociatividadComponent;
  let fixture: ComponentFixture<NivelAsociatividadComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ NivelAsociatividadComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(NivelAsociatividadComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
