import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CacaoCNNComponent } from './cacao-cnn.component';

describe('CacaoCNNComponent', () => {
  let component: CacaoCNNComponent;
  let fixture: ComponentFixture<CacaoCNNComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CacaoCNNComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CacaoCNNComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
