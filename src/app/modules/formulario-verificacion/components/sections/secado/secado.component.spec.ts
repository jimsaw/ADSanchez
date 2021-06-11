import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SecadoComponent } from './secado.component';

describe('SecadoComponent', () => {
  let component: SecadoComponent;
  let fixture: ComponentFixture<SecadoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SecadoComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(SecadoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
