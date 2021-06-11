import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FermentacionComponent } from './fermentacion.component';

describe('FermentacionComponent', () => {
  let component: FermentacionComponent;
  let fixture: ComponentFixture<FermentacionComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ FermentacionComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(FermentacionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
