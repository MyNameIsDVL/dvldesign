import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TimeWorkController } from './time-work.controller';

describe('TimeWorkComponent', () => {
  let component: TimeWorkController;
  let fixture: ComponentFixture<TimeWorkController>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TimeWorkController ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TimeWorkController);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
