import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { EditTimeWorkController } from './controllers/edit-time-work/edit-time-work.controller';
import { HomeMainController } from './controllers/home-main/home-main.controller';
import { HomeController } from './controllers/home/home.controller';
import { LoginController } from './controllers/login/login.controller';
import { QuestionnaireController } from './controllers/questionnaire/questionnaire.controller';
import { RegisterController } from './controllers/register/register.controller';
import { StartPageController } from './controllers/start-page/start-page.controller';
import { TimeWorkController } from './controllers/time-work/time-work.controller';
import { VacationsController } from './controllers/vacations/vacations.controller';
import { AuthNotTakePlaceGuard } from './shared/auth-not-take-place.guard';
import { TimeWorkService } from './store/time-work.service';

const routes: Routes = [
  { path: '', component: StartPageController },
  { path: 'signIn', component: RegisterController },
  { path: 'logIn', component: LoginController },
  { path: 'home', component: HomeController, canActivate: [AuthNotTakePlaceGuard], children: [
    { path: '', component: HomeMainController },
    { path: 'vacations', component: VacationsController },
    { path: 'timeWork', component: TimeWorkController },
    { path: 'timeWork/:id', component: EditTimeWorkController, resolve: { timeWorkEdit: TimeWorkService } },
    { path: 'questionnaire', component: QuestionnaireController }
  ]}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
