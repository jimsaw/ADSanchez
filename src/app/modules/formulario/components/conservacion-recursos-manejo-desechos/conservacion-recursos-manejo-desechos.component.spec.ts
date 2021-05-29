import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ConservacionRecursosManejoDesechosComponent } from './conservacion-recursos-manejo-desechos.component';

describe('ConservacionRecursosManejoDesechosComponent', () => {
  let component: ConservacionRecursosManejoDesechosComponent;
  let fixture: ComponentFixture<ConservacionRecursosManejoDesechosComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ConservacionRecursosManejoDesechosComponent]
    })
      .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ConservacionRecursosManejoDesechosComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
