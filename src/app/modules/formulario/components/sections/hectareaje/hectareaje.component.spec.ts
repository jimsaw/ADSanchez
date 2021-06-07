import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HectareajeComponent } from './hectareaje.component';

describe('HectareajeComponent', () => {
  let component: HectareajeComponent;
  let fixture: ComponentFixture<HectareajeComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ HectareajeComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(HectareajeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
