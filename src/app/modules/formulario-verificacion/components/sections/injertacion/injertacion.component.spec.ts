import { ComponentFixture, TestBed } from '@angular/core/testing';

import { InjertacionComponent } from './injertacion.component';

describe('InjertacionComponent', () => {
  let component: InjertacionComponent;
  let fixture: ComponentFixture<InjertacionComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ InjertacionComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(InjertacionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
