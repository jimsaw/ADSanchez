import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ExportacionesCSVComponent } from './exportaciones-csv.component';

describe('ExportacionesCSVComponent', () => {
  let component: ExportacionesCSVComponent;
  let fixture: ComponentFixture<ExportacionesCSVComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ExportacionesCSVComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ExportacionesCSVComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
