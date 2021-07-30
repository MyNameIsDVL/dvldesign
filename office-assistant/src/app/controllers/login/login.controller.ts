import { HttpErrorResponse } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { TooltipService } from 'src/app/shared/tooltip.service';
import { UserService } from 'src/app/store/user.service';

@Component({
  selector: 'app-login-controller',
  templateUrl: './login.controller.html',
  styleUrls: ['./login.controller.css']
})
export class LoginController implements OnInit {

  constructor(private userService: UserService, private router: Router, private tooltip: TooltipService) { }

  ngOnInit(): void {
  }

  login({username, password}) {
    this.userService.authenticationLogin(username, password).subscribe((data: any) => {
      localStorage.setItem('userToken', data.access_token);
      this.router.navigate(['/home']);
    }, (error: HttpErrorResponse) => {
      this.tooltip.error('Wrong login or password!', 1000, 5000);
    });
  }

  goToHome() {
    this.router.navigate(['/home']);
  }

  goToSignIn() {
    this.router.navigate(['/signIn']);
  }

}
