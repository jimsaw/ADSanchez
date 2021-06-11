import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ControlMalezasComponent } from './control-malezas.component';

describe('ControlMalezasComponent', () => {
  let component: ControlMalezasComponent;
  let fixture: ComponentFixture<ControlMalezasComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ControlMalezasComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ControlMalezasComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
