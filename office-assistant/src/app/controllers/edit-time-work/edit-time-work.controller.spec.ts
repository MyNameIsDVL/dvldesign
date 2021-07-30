import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EditTimeWorkController } from './edit-time-work.controller';

describe('EditTimeWorkComponent', () => {
  let component: EditTimeWorkController;
  let fixture: ComponentFixture<EditTimeWorkController>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ EditTimeWorkController ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(EditTimeWorkController);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
