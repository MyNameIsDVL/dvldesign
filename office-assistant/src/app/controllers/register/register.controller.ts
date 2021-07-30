import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Router } from '@angular/router';
import { throwError } from 'rxjs';
import { User } from 'src/app/model/register-login/user.model';
import { TooltipService } from 'src/app/shared/tooltip.service';
import { UserService } from 'src/app/store/user.service';

@Component({
  selector: 'app-register-controller',
  templateUrl: './register.Controller.html',
  styleUrls: ['./register.Controller.css']
})
export class RegisterController implements OnInit {

  user: User;

  constructor(private userService: UserService, private router: Router, private tooltip: TooltipService) { }

  ngOnInit(): void {
    this.clearAllFields();
  }

  clearAllFields() {
    this.user = {
      UserName: '',
      Password: '',
      Email: '',
      FirstName: '',
      LastName: ''
    } 
  }

  register(form: NgForm) {
    this.userService.newUser(form.value).subscribe((data: any) => {
      if (!Object.values(form.value).every(Boolean)) {
        this.tooltip.error('You must complete all fields!', 1000, 5000);
      }
      else if ([form.value].map(value => value.UserName)[0].length > 10) {
        this.tooltip.error('max length for user name is 10!', 1000, 5000);
      }
      else if ([form.value].map(value => value.Email)[0].length > 60) {
        this.tooltip.error('max length for email adress is 60!', 1000, 5000);
      }
      else if ([form.value].map(value => value.Password)[0].length > 20 && [form.value].map(value => value.Password)[0].length < 8) {
        this.tooltip.error('password: max length 20, min 8!', 1000, 5000);
      }
      else if ([form.value].map(value => value.FirstName)[0].length > 10) {
        this.tooltip.error('max length for first name is 10!', 1000, 5000);
      }
      else if ([form.value].map(value => value.LastName)[0].length > 10) {
        this.tooltip.error('max length for last name is 10!', 1000, 5000);
      }
      else if (data.Succeeded == true) 
      {
        this.clearAllFields();
        this.tooltip.success('Welcome as a registered user!', 1000, 5000);
        this.router.navigate(['/logIn']);
      } else {
        throwError("no data! check your connection");
        this.tooltip.error('Registration failed! ' + data.Errors, 1000, 6000);
      } 
    });
  }

  registerUserSettings(form: NgForm) {
    return this.userService.newSettingsForUser(form.value).subscribe();
  }

  goToHome() {
    this.router.navigate(['/home']);
  }

  goToLogIn() {
    this.router.navigate(['/logIn']);
  }

}
