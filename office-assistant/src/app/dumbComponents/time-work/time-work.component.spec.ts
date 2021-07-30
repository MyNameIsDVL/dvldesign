import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TimeWorkComponent } from './time-work.component';

describe('TimeWorkComponent', () => {
  let component: TimeWorkComponent;
  let fixture: ComponentFixture<TimeWorkComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TimeWorkComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TimeWorkComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
