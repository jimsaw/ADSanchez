import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MaquinariaAgricolaComponent } from './maquinaria-agricola.component';

describe('MaquinariaAgricolaComponent', () => {
  let component: MaquinariaAgricolaComponent;
  let fixture: ComponentFixture<MaquinariaAgricolaComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MaquinariaAgricolaComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(MaquinariaAgricolaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
