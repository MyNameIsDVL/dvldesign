import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { ToastrService } from 'ngx-toastr';
import { Observable, throwError } from 'rxjs';
import { Vacation } from 'src/app/model/vacations/vacation.model';
import { UserService } from 'src/app/store/user.service';
import { VacationsService } from 'src/app/store/vacations.service';
import { Router } from '@angular/router';
import { User } from 'src/app/model/register-login/user.model';
import { TooltipService } from 'src/app/shared/tooltip.service';

@Component({
  selector: 'app-vacations-controller',
  templateUrl: './vacations.controller.html',
  styleUrls: ['./vacations.controller.css']
})
export class VacationsController implements OnInit {

  vac: Vacation;
  claim: User;

  $vacByLoggedUser: Observable<Vacation[]>;

  constructor(private vacationsService: VacationsService, private userService: UserService, private router: Router,
    private tooltip: TooltipService) { }

  ngOnInit(): void {
    this.clearAllFields();
    this.getLoggedDataMethod();
  }

  clearAllFields() {
    this.vac = {
      Type: '',
      Description: '',
      VacDays: null,
      DateIn: null,
      DateTo: null
    } 
  }

  getLoggedDataMethod() {
    this.userService.getLogedUser().subscribe((data: User) => {
      this.claim = data;
      this.$vacByLoggedUser = this.vacationsService.getVacationsByLogged(this.claim.UserName);
    });
  }

  registerVacation(form: NgForm) {
    // let limit: User;
    // this.userService.getAllUsers().subscribe(data => limit = data.find(item => item.UserName === this.claim.UserName));
    // console.log(limit);

    let resultOfLimit = parseInt(this.claim.VacLimit) - form.value.VacDays;
    //console.log(resultOfLimit);
    if (!Object.values(form.value).every(Boolean)) {
      this.tooltip.error('You must complete all fields!', 1000, 5000);
    } else {
      this.vacationsService.newVacation(form.value).subscribe((data: Vacation) => {
        if (data) {
          this.clearAllFields();
          //console.log(resultOfLimit.toString(), this.claim.UserName);
          //this.updateLimit(resultOfLimit.toString(), this.claim.UserName);
          this.getLoggedDataMethod();
          this.tooltip.success('The form has been added!', 1000, 5000);
        } else {
          throwError("no data! check your connection");
          this.tooltip.error('action failed!', 1000, 5000);
        }
      })
    } 
  }

  removeVacation(id: number) {
    return this.vacationsService.removeVacationById(id).subscribe();
  }

  updateLimit(limit: string, username: string) {
    this.userService.updateVacLimit(limit, username).subscribe();
  }

  // TODO [VacLimit] Odejmowanie działa, tylko powinno przyjmować VacLimit nie ze storydza bezpośrednio z bazy. Do zrobienia!!!
  getUserByName(username: string) {
    return this.userService.getAllUsers().subscribe(data => data.find(item => item.UserName === username));
  }

}
