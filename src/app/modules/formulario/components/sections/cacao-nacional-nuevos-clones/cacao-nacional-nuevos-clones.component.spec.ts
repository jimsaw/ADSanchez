import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CacaoNacionalNuevosClonesComponent } from './cacao-nacional-nuevos-clones.component';

describe('CacaoNacionalNuevosClonesComponent', () => {
  let component: CacaoNacionalNuevosClonesComponent;
  let fixture: ComponentFixture<CacaoNacionalNuevosClonesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CacaoNacionalNuevosClonesComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CacaoNacionalNuevosClonesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
