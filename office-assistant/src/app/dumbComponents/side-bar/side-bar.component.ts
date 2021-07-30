import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { SafeUrl } from '@angular/platform-browser';
import { faHome, faPlus, faReceipt, faUserTimes } from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'app-side-bar',
  templateUrl: './side-bar.component.html',
  styleUrls: ['./side-bar.component.css']
})
export class SideBarComponent implements OnInit {

  @Input() claim: string;
  @Input() imageURL: SafeUrl;
  @Output() goToHomePage = new EventEmitter();
  @Output() goToVacationsPage = new EventEmitter();
  @Output() goToTimeWorkPage = new EventEmitter();
  @Output() goToQuestionnairePage = new EventEmitter();

  /**Icons */
  faHome = faHome;
  faPlus = faPlus;
  faReceipt = faReceipt;
  faUserTimes = faUserTimes;

  ngOnInit(): void {
  }

  goToHomePageTem() {
    this.goToHomePage.emit();
  }

  goToVacationsPageTem() {
    this.goToVacationsPage.emit();
  }

  goToTimeWorkPageTem() {
    this.goToTimeWorkPage.emit();
  }

  goToQuestionnairePageTem() {
    this.goToQuestionnairePage.emit();
  }

}
