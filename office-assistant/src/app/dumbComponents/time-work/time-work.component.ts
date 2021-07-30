import { Component, ElementRef, EventEmitter, Input, OnInit, Output, ViewChild } from '@angular/core';
import { NgForm } from '@angular/forms';
import { User } from 'src/app/model/register-login/user.model';
import { TimeWork } from 'src/app/model/time-work/TimeWork.model';
import { faMinusCircle, faEdit, faStop, faPlayCircle, faRedo } from '@fortawesome/free-solid-svg-icons';
import { StopWatch } from '../../shared/stop-watch';

@Component({
  selector: 'app-time-work',
  templateUrl: './time-work.component.html',
  styleUrls: ['./time-work.component.css']
})
export class TimeWorkComponent implements OnInit {

  @Input() timeByLoggedUser: TimeWork[];
  @Input() timeWork: TimeWork;
  @Input() claim: User;
  @Output() registerTimeWork = new EventEmitter<NgForm>();
  @Output() goToEditTimeWork = new EventEmitter();
  @Output() removeTimeWorkById = new EventEmitter();
  @Output() getLoggedDataMethod = new EventEmitter();

  faMinusCircle = faMinusCircle;
  faEdit = faEdit;
  faStop = faStop;
  faPlayCircle = faPlayCircle;
  faRedo = faRedo;

  registerTimeWorkTem(form: NgForm) {
    this.registerTimeWork.emit(form);
  }

  goToEditTimeWorkTem(id: number) {
    this.goToEditTimeWork.emit(id);
  }

  removeTimeWorkByIdTem(id: number) {
    this.removeTimeWorkById.emit(id);
  }

  getLoggedDataMethodTem() {
    this.getLoggedDataMethod.emit();
  }

  ngOnInit(): void {
    StopWatch.ready();
  }

}
