import { ComponentFixture, TestBed } from '@angular/core/testing';

import { InformacionFamiliaComponent } from './informacion-familia.component';

describe('InformacionFamiliaComponent', () => {
  let component: InformacionFamiliaComponent;
  let fixture: ComponentFixture<InformacionFamiliaComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ InformacionFamiliaComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(InformacionFamiliaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
