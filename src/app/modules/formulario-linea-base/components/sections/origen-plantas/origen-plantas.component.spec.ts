import { ComponentFixture, TestBed } from '@angular/core/testing';

import { OrigenPlantasComponent } from './origen-plantas.component';

describe('OrigenPlantasComponent', () => {
  let component: OrigenPlantasComponent;
  let fixture: ComponentFixture<OrigenPlantasComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ OrigenPlantasComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(OrigenPlantasComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
