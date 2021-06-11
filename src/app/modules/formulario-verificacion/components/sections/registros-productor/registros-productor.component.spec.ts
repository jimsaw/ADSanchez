import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RegistrosProductorComponent } from './registros-productor.component';

describe('RegistrosProductorComponent', () => {
  let component: RegistrosProductorComponent;
  let fixture: ComponentFixture<RegistrosProductorComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ RegistrosProductorComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(RegistrosProductorComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
