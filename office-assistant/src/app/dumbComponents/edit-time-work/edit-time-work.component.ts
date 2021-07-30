import { Component, ComponentRef, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { TimeWork } from 'src/app/model/time-work/TimeWork.model';

@Component({
  selector: 'app-edit-time-work',
  templateUrl: './edit-time-work.component.html',
  styleUrls: ['./edit-time-work.component.css']
})
export class EditTimeWorkComponent implements OnInit {

  @Input() timeWorkEdit: TimeWork;
  @Output() updateTimeWorkById = new EventEmitter();
  @Output() goToTimeWorkPage = new EventEmitter();

  updateTimeWorkByIdTem(form: FormGroup, id: number) {
    this.updateTimeWorkById.emit({form, id});
  }

  goToTimeWorkPageTem() {
    this.goToTimeWorkPage.emit(); 
  }

  modelForm : FormGroup;

  ngOnInit(): void {
    this.modelForm = new FormGroup({
      UserName: new FormControl(this.timeWorkEdit.UserName, Validators.required),
      Monday: new FormControl(this.timeWorkEdit.Monday),
      Tuesday: new FormControl(this.timeWorkEdit.Tuesday),
      Wednesday: new FormControl(this.timeWorkEdit.Wednesday),
      Thursday: new FormControl(this.timeWorkEdit.Thursday),
      Friday: new FormControl(this.timeWorkEdit.Friday),
      MondayDescription: new FormControl(this.timeWorkEdit.MondayDescription),
      TuesdayDescription: new FormControl(this.timeWorkEdit.TuesdayDescription),
      WednesdayDescription: new FormControl(this.timeWorkEdit.WednesdayDescription),
      ThursdayDescription: new FormControl(this.timeWorkEdit.ThursdayDescription),
      FridayDescription: new FormControl(this.timeWorkEdit.FridayDescription),
      DateFrom: new FormControl(this.timeWorkEdit.DateFrom, Validators.required),
      DateTo: new FormControl(this.timeWorkEdit.DateTo, Validators.required)
    });
  }

}
