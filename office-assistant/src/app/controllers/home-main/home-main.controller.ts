import { Component, OnInit } from '@angular/core';
import { UserService } from 'src/app/store/user.service';

@Component({
  selector: 'app-home-main-controller',
  templateUrl: './home-main.controller.html',
  styleUrls: ['./home-main.controller.css']
})
export class HomeMainController implements OnInit {

  claim: string;

  constructor(private userService: UserService) { }

  ngOnInit(): void {
    this.userService.getLogedUser().subscribe((data: string) => {
      this.claim = data;
    });
  }

}
