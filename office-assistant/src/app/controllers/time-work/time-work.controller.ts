import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Router } from '@angular/router';
import { Observable, throwError } from 'rxjs';
import { User } from 'src/app/model/register-login/user.model';
import { TimeWork } from 'src/app/model/time-work/TimeWork.model';
import { TooltipService } from 'src/app/shared/tooltip.service';
import { TimeWorkService } from 'src/app/store/time-work.service';
import { UserService } from 'src/app/store/user.service';

@Component({
  selector: 'app-time-work-controller',
  templateUrl: './time-work.controller.html',
  styleUrls: ['./time-work.controller.css']
})
export class TimeWorkController implements OnInit {

  timeWork: TimeWork;
  claim: User;

  $timeByLoggedUser: Observable<TimeWork[]>;

  constructor(private userService: UserService, private timeWorkService: TimeWorkService,
    private router: Router, private tooltip: TooltipService) { }

  ngOnInit(): void {
    this.clearAllFields();
    this.getLoggedDataMethod();
  }

  clearAllFields() {
    this.timeWork = {
      Monday: '',
      Tuesday: '',
      Wednesday: '',
      Thursday: '',
      Friday: '',
      MondayDescription: '',
      TuesdayDescription: '',
      WednesdayDescription: '',
      ThursdayDescription: '',
      FridayDescription: '',
      DateFrom: null,
      DateTo: null
    } 
  }

  getLoggedDataMethod() {
    this.userService.getLogedUser().subscribe((data: User) => {
      this.claim = data;
      this.$timeByLoggedUser = this.timeWorkService.getTimeWorkByLogged(this.claim.UserName);
    });
  }

  registerTimeWork(form: NgForm) {
    if (!Object.values(form.value).every(Boolean)) {
      this.tooltip.error('You must complete all fields!', 1000, 5000);
    } else {
      this.timeWorkService.newTimeWork(form.value).subscribe((data: TimeWork) => {
        if (data) {
          this.clearAllFields();
          this.getLoggedDataMethod();
          this.tooltip.success('The form has been added!', 1000, 5000);
        } else {
          throwError("no data! check your connection");
          this.tooltip.error('action failed!', 1000, 5000);
        }
      })
    } 
  }

  removeTimeWorkById(id: number) {
    return this.timeWorkService.removeTimeWorkById(id).subscribe();
  }

  goToEditTimeWork(id: number) {
    this.router.navigate(['home/timeWork/', id]);
  }

}
