import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { User } from 'src/app/model/register-login/user.model';
import { TimeWork } from 'src/app/model/time-work/TimeWork.model';
import { TooltipService } from 'src/app/shared/tooltip.service';
import { TimeWorkService } from 'src/app/store/time-work.service';
import { UserService } from 'src/app/store/user.service';

@Component({
  selector: 'app-edit-time-work-controller',
  templateUrl: './edit-time-work.controller.html',
  styleUrls: ['./edit-time-work.controller.css']
})
export class EditTimeWorkController implements OnInit {

  timeWorkEdit: TimeWork;

  timeWork: TimeWork;

  constructor(private router: Router, private timeWorkService: TimeWorkService, private activatedRoute: ActivatedRoute,
    private tooltip: TooltipService) { }

  ngOnInit(): void {
    this.clearAllFields();
    this.activatedRoute.data.subscribe(data => {
      this.timeWorkEdit = data.timeWorkEdit;
    });
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

  updateTimeWorkById({form, id}) {
    this.timeWorkService.updateTimeWork(form.value, id).subscribe((data: TimeWork) => {
        this.clearAllFields();
        this.goToTimeWorkPage();
        this.tooltip.success('Editing was successful!', 1000, 5000);
    })
  }

  goToTimeWorkPage() {
    this.router.navigate(['home/timeWork']);
  }

}
