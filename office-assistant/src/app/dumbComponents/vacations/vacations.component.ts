import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { NgForm } from '@angular/forms';
import { User } from 'src/app/model/register-login/user.model';
import { Vacation } from 'src/app/model/vacations/vacation.model';

@Component({
  selector: 'app-vacations',
  templateUrl: './vacations.component.html',
  styleUrls: ['./vacations.component.css']
})
export class VacationsComponent implements OnInit {

  @Input() vac: Vacation;
  @Input() claim: User;
  @Input() vacByLoggedUser: Vacation[];
  @Output() registerVacation = new EventEmitter<NgForm>();
  @Output() removeVacation = new EventEmitter<number>();
  @Output() getLoggedDataMethod = new EventEmitter();

  ngOnInit(): void {
  }

  registerVacationTem(rForm: NgForm) {
    this.registerVacation.emit(rForm);
  }

  remove(id: number) {
    this.removeVacation.emit(id);
  }

  getLoggedDataMethodTem() {
    this.getLoggedDataMethod.emit();
  }

}
