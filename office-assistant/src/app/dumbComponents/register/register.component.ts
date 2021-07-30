import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { NgForm } from '@angular/forms';
import { User } from 'src/app/model/register-login/user.model';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {

  @Input() user: User;
  @Output() registerEvent = new EventEmitter<NgForm>();
  @Output() goToHome = new EventEmitter();
  @Output() goToLogIn = new EventEmitter();
  @Output() registerUserSettings = new EventEmitter<NgForm>();

  ngOnInit(): void {
  }

  register(rForm: NgForm) {
    this.registerEvent.emit(rForm);
  }

  goToHomeTem() {
    this.goToHome.emit();
  }

  goToLogInTem() {
    this.goToLogIn.emit();
  }

  registerUserSettingsTem(form: NgForm) {
    this.registerUserSettings.emit(form);
  }

}
