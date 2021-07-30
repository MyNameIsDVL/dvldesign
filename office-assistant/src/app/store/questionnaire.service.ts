import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import { Questionnaire } from '../model/questionnaire/questionnaire.model';

@Injectable({
  providedIn: 'root'
})
export class QuestionnaireService {

  private readonly url = "http://localhost:57127"; 

  constructor(private http: HttpClient) { }

  newQuestionnaire(que: Questionnaire): Observable<Questionnaire[]> {
    const result: Questionnaire = {
      UserName: que.UserName,
      FirstName: que.FirstName,
      LastName: que.LastName,
      MothersName: que.MothersName,
      FathersName: que.FathersName,
      DateOfBirth: que.DateOfBirth,
      Street: que.Street,
      HomeNumber: que.HomeNumber,
      ApartmentNumber: que.ApartmentNumber,
      Education: que.Education,
      SchoolName: que.SchoolName,
      LastEmployer: que.LastEmployer,
      PhoneNumber: que.PhoneNumber,
      PeselNumber: que.PeselNumber
    }
 
    return this.http.post<Questionnaire[]>(this.url + '/api/Questionnaires', result);
  }

  getQuestionnaireByLogged(username: string): Observable<Questionnaire[]> {
    return this.http.get<Questionnaire[]>(this.url + '/api/Questionnaires').pipe(map(que => que.filter(item => item.UserName === username)));
  }

  removeQuestionnaireById(id: number): Observable<Questionnaire> {
    return this.http.delete<Questionnaire>(this.url + '/api/Questionnaires/' + id);
  }
}
