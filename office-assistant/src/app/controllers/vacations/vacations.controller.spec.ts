import { ComponentFixture, TestBed } from '@angular/core/testing';

import { VacationsController } from './vacations.controller';

describe('VacationsComponent', () => {
  let component: VacationsController;
  let fixture: ComponentFixture<VacationsController>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ VacationsController ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(VacationsController);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
