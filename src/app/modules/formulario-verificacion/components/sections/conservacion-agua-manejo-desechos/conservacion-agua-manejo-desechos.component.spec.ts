import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ConservacionAguaManejoDesechosComponent } from './conservacion-agua-manejo-desechos.component';

describe('ConservacionAguaManejoDesechosComponent', () => {
  let component: ConservacionAguaManejoDesechosComponent;
  let fixture: ComponentFixture<ConservacionAguaManejoDesechosComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ConservacionAguaManejoDesechosComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ConservacionAguaManejoDesechosComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
