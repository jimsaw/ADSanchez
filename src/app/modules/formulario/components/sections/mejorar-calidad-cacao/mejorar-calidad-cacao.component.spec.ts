import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MejorarCalidadCacaoComponent } from './mejorar-calidad-cacao.component';

describe('MejorarCalidadCacaoComponent', () => {
  let component: MejorarCalidadCacaoComponent;
  let fixture: ComponentFixture<MejorarCalidadCacaoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MejorarCalidadCacaoComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(MejorarCalidadCacaoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
