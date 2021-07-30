import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EditTimeWorkComponent } from './edit-time-work.component';

describe('EditTimeWorkComponent', () => {
  let component: EditTimeWorkComponent;
  let fixture: ComponentFixture<EditTimeWorkComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ EditTimeWorkComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(EditTimeWorkComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
