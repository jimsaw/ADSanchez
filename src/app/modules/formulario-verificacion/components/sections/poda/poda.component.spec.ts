import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PodaComponent } from './poda.component';

describe('PodaComponent', () => {
  let component: PodaComponent;
  let fixture: ComponentFixture<PodaComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PodaComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(PodaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
