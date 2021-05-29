import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PracticasAgricolasComponent } from './practicas-agricolas.component';

describe('PracticasAgricolasComponent', () => {
  let component: PracticasAgricolasComponent;
  let fixture: ComponentFixture<PracticasAgricolasComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PracticasAgricolasComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(PracticasAgricolasComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
