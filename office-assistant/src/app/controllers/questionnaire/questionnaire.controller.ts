import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { ToastrService } from 'ngx-toastr';
import { Observable, throwError } from 'rxjs';
import { Questionnaire } from 'src/app/model/questionnaire/questionnaire.model';
import { User } from 'src/app/model/register-login/user.model';
import { QuestionnaireService } from 'src/app/store/questionnaire.service';
import { UserService } from 'src/app/store/user.service';
import { jsPDF } from 'jspdf';
import html2canvas from 'html2canvas';
import { TooltipService } from 'src/app/shared/tooltip.service';

@Component({
  selector: 'app-questionnaire-controller',
  templateUrl: './questionnaire.controller.html',
  styleUrls: ['./questionnaire.controller.css']
})
export class QuestionnaireController implements OnInit {

  que: Questionnaire;
  claim: User;

  $queByLoggedUser: Observable<Questionnaire[]>;

  constructor(private userService: UserService, private questionnaireService: QuestionnaireService,
    private tooltip: TooltipService) { }

  ngOnInit(): void {
    this.clearAllFields();
    this.getLoggedDataMethod();
  }

  clearAllFields() {
    this.que = {
      FirstName: '',
      LastName: '',
      MothersName: '',
      FathersName: '',
      DateOfBirth: null,
      Street: '',
      HomeNumber: null,
      ApartmentNumber: null,
      Education: '',
      SchoolName: '',
      LastEmployer: '',
      PhoneNumber: null,
      PeselNumber: null
    } 
  }

  getLoggedDataMethod() {
    this.userService.getLogedUser().subscribe((data: User) => {
      this.claim = data;
      this.$queByLoggedUser = this.questionnaireService.getQuestionnaireByLogged(this.claim.UserName);
    });
  }

  registerQuestionnaire(form: NgForm) {
    if (!Object.values(form.value).every(Boolean)) {
      this.tooltip.error('You must complete all fields!', 1000, 5000);
    } else {
      this.questionnaireService.newQuestionnaire(form.value).subscribe((data: Questionnaire[]) => {
        if (data) {
          this.clearAllFields();
          this.getLoggedDataMethod();
          this.tooltip.success('The form has been added!', 1000, 5000);
        } else {
          throwError("no data! check your connection");
          this.tooltip.error('action failed!', 1000, 5000);
        }
      })
    }
  }

  removeQuestionnaire(id: number) {
    return this.questionnaireService.removeQuestionnaireById(id).subscribe();
  }

  downloadJsPdf({username, id}) {
    const element = document.getElementById(`dvl-jspdf-to-print-${id}`);

    this.tooltip.success('It will take a few seconds!', 1000, 6000);

    html2canvas(element).then(can => {
      let img = can.toDataURL('image/png');
      let _jspdf = new jsPDF();
      let imgHeight = can.height * 208 / can.width;
      _jspdf.addImage(img, 0, 0, 208, imgHeight);
      _jspdf.save(`${username}_questionnaire_${new Date()}.pdf`);
    })
  }

}
