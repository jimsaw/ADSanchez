import { ComponentFixture, TestBed } from '@angular/core/testing';

import { IncrementarProductividadComponent } from './incrementar-productividad.component';

describe('IncrementarProductividadComponent', () => {
  let component: IncrementarProductividadComponent;
  let fixture: ComponentFixture<IncrementarProductividadComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ IncrementarProductividadComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(IncrementarProductividadComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
