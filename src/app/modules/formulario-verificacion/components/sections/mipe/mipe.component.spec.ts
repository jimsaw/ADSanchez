import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MIPEComponent } from './mipe.component';

describe('MIPEComponent', () => {
  let component: MIPEComponent;
  let fixture: ComponentFixture<MIPEComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MIPEComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(MIPEComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
