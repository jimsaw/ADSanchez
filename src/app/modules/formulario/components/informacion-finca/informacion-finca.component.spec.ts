import { ComponentFixture, TestBed } from '@angular/core/testing';

import { InformacionFincaComponent } from './informacion-finca.component';

describe('InformacionFincaComponent', () => {
  let component: InformacionFincaComponent;
  let fixture: ComponentFixture<InformacionFincaComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ InformacionFincaComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(InformacionFincaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
