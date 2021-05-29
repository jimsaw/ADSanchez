import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CondicionesLaboralesComponent } from './condiciones-laborales.component';

describe('CondicionesLaboralesComponent', () => {
  let component: CondicionesLaboralesComponent;
  let fixture: ComponentFixture<CondicionesLaboralesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CondicionesLaboralesComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CondicionesLaboralesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
