import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Questionnaire } from 'src/app/model/questionnaire/questionnaire.model';
import { User } from 'src/app/model/register-login/user.model';

@Component({
  selector: 'app-questionnaire',
  templateUrl: './questionnaire.component.html',
  styleUrls: ['./questionnaire.component.css']
})
export class QuestionnaireComponent implements OnInit {

  @Input() que: Questionnaire;
  @Input() claim: User;
  @Input() queByLoggedUser: Questionnaire[];
  @Output() registerQuestionnaire = new EventEmitter<NgForm>();
  @Output() removeQuestionnaire = new EventEmitter<number>();
  @Output() getLoggedDataMethod = new EventEmitter();
  @Output() downloadJsPdf = new EventEmitter();

  ngOnInit(): void {
  }

  registerQueTem(form: NgForm) {
    this.registerQuestionnaire.emit(form);
  }

  removeQueTem(id: number) {
    this.removeQuestionnaire.emit(id);
  }

  getLoggedDataMethodTem() {
    this.getLoggedDataMethod.emit();
  }

  downloadJsPdfTem(username: string, id: number) {
    this.downloadJsPdf.emit({username, id});
  }

}
