import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-start-page-controller',
  templateUrl: './start-page.controller.html',
  styleUrls: ['./start-page.controller.css']
})
export class StartPageController implements OnInit {

  constructor(private router: Router) { }

  ngOnInit(): void {
  }

  goToSignIn() {
    this.router.navigate(['/signIn']);
  }

  goToLogIn() {
    this.router.navigate(['/logIn']);
  }

}
