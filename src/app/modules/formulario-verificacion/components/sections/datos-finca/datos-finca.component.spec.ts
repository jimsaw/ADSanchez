import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DatosFincaComponent } from './datos-finca.component';

describe('DatosFincaComponent', () => {
  let component: DatosFincaComponent;
  let fixture: ComponentFixture<DatosFincaComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DatosFincaComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(DatosFincaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
