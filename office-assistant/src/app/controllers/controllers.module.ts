import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DumbComponentsModule } from '../dumbComponents/dumb-components.module';
import { HomeController } from './home/home.controller';
import { LoginController } from './login/login.controller';
import { RegisterController } from './register/register.controller';
import { StartPageController } from './start-page/start-page.controller';
import { StoreModule } from '../store/store.module';
import { HomeMainController } from './home-main/home-main.controller';
import { AppRoutingModule } from '../app-routing.module';
import { VacationsController } from './vacations/vacations.controller';
import { TimeWorkController } from './time-work/time-work.controller';
import { QuestionnaireController } from './questionnaire/questionnaire.controller';
import { EditTimeWorkController } from './edit-time-work/edit-time-work.controller';

@NgModule({
  declarations: [
    HomeController,
    LoginController,
    RegisterController,
    StartPageController,
    HomeMainController,
    VacationsController,
    TimeWorkController,
    QuestionnaireController,
    EditTimeWorkController,
  ],
  imports: [
    CommonModule,
    DumbComponentsModule,
    StoreModule,
    AppRoutingModule
  ],
  providers: []
})
export class ControllersModule { }
