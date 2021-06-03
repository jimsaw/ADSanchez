import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EditAgricultorBodyComponent } from './edit-agricultor-body.component';

describe('EditAgricultorBodyComponent', () => {
  let component: EditAgricultorBodyComponent;
  let fixture: ComponentFixture<EditAgricultorBodyComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ EditAgricultorBodyComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(EditAgricultorBodyComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
