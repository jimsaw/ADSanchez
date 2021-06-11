import { ComponentFixture, TestBed } from '@angular/core/testing';

import { IncentivosComponent } from './incentivos.component';

describe('IncentivosComponent', () => {
  let component: IncentivosComponent;
  let fixture: ComponentFixture<IncentivosComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ IncentivosComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(IncentivosComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
