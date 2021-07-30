import { Component, EventEmitter, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  @Output() loginEvent = new EventEmitter();
  @Output() goToHome = new EventEmitter();
  @Output() goToSignIn = new EventEmitter();

  ngOnInit(): void {
  }

  login(username: string, password: string) {
    this.loginEvent.emit({username, password});
  }

  goToHomeTem() {
    this.goToHome.emit();
  }

  goToSignInTem() {
    this.goToSignIn.emit();
  }

}
