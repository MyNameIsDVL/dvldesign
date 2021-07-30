import { Component, EventEmitter, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-start-page',
  templateUrl: './start-page.component.html',
  styleUrls: ['./start-page.component.css']
})
export class StartPageComponent implements OnInit {

  @Output() goToSignIn = new EventEmitter();
  @Output() goToLogIn = new EventEmitter();

  ngOnInit(): void {
  }

  goToSignInTem() {
    this.goToSignIn.emit();
  }

  goToLogInTem() {
    this.goToLogIn.emit();
  }
}
