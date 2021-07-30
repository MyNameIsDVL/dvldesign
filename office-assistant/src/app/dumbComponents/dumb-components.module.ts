import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HomeComponent } from './home/home.component';
import { LoginComponent } from './login/login.component';
import { RegisterComponent } from './register/register.component';
import { StartPageComponent } from './start-page/start-page.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { TopNavComponent } from './top-nav/top-nav.component';
import { SideBarComponent } from './side-bar/side-bar.component';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { VacationsComponent } from './vacations/vacations.component';
import { TimeWorkComponent } from './time-work/time-work.component';
import { QuestionnaireComponent } from './questionnaire/questionnaire.component';
import { EditTimeWorkComponent } from './edit-time-work/edit-time-work.component';

@NgModule({
  declarations: [
    HomeComponent,
    LoginComponent,
    RegisterComponent,
    StartPageComponent,
    TopNavComponent,
    SideBarComponent,
    VacationsComponent,
    TimeWorkComponent,
    QuestionnaireComponent,
    EditTimeWorkComponent
  ],
  imports: [
    CommonModule,
    FormsModule,
    BrowserAnimationsModule,
    FontAwesomeModule,
    ReactiveFormsModule
  ],
  exports: [
    HomeComponent,
    LoginComponent,
    RegisterComponent,
    StartPageComponent,
    TopNavComponent,
    SideBarComponent,
    VacationsComponent,
    TimeWorkComponent,
    QuestionnaireComponent,
    EditTimeWorkComponent
  ]
})
export class DumbComponentsModule { }
