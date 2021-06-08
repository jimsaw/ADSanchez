import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CacaoNacionalComponent } from './cacao-nacional.component';

describe('CacaoNacionalComponent', () => {
  let component: CacaoNacionalComponent;
  let fixture: ComponentFixture<CacaoNacionalComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CacaoNacionalComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CacaoNacionalComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
