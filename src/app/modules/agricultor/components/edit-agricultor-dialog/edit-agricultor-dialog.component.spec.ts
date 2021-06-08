import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EditAgricultorDialogComponent } from './edit-agricultor-dialog.component';

describe('EditAgricultorDialogComponent', () => {
  let component: EditAgricultorDialogComponent;
  let fixture: ComponentFixture<EditAgricultorDialogComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ EditAgricultorDialogComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(EditAgricultorDialogComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
