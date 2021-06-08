import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PreguntasAdicionalesComponent } from './preguntas-adicionales.component';

describe('PreguntasAdicionalesComponent', () => {
  let component: PreguntasAdicionalesComponent;
  let fixture: ComponentFixture<PreguntasAdicionalesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PreguntasAdicionalesComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(PreguntasAdicionalesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
