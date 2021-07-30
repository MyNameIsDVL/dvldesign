import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot } from '@angular/router';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import { TimeWork } from '../model/time-work/TimeWork.model';

@Injectable({
  providedIn: 'root'
})
export class TimeWorkService {

  private readonly url = "http://localhost:57127"; 

  constructor(private http: HttpClient) { }

  newTimeWork(time: TimeWork) {
    const result: TimeWork = {
      UserName: time.UserName,
      Monday: '',
      Tuesday: '',
      Wednesday: '',
      Thursday: '',
      Friday: '',
      MondayDescription: '',
      TuesdayDescription: '',
      WednesdayDescription: '',
      ThursdayDescription: '',
      FridayDescription: '',
      DateFrom: time.DateFrom,
      DateTo: time.DateTo
    }
 
    return this.http.post<TimeWork>(this.url + '/api/TimeWorks', result);
  }

  updateTimeWork(time: TimeWork, id: number) {
    const result: TimeWork = {
      Id: id,
      UserName: time.UserName,
      Monday: time.Monday,
      Tuesday: time.Tuesday,
      Wednesday: time.Wednesday,
      Thursday: time.Thursday,
      Friday: time.Friday,
      MondayDescription: time.MondayDescription,
      TuesdayDescription: time.TuesdayDescription,
      WednesdayDescription: time.WednesdayDescription,
      ThursdayDescription: time.ThursdayDescription,
      FridayDescription: time.FridayDescription,
      DateFrom: time.DateFrom,
      DateTo: time.DateTo
    }
 
    return this.http.put<TimeWork>(this.url + '/api/TimeWorks/' + id, result);
  }

  getTimeWorkByLogged(username: string): Observable<TimeWork[]> {
    return this.http.get<TimeWork[]>(this.url + '/api/TimeWorks').pipe(map(vacation => vacation.filter(item => item.UserName === username)));
  }

  removeTimeWorkById(id: number): Observable<TimeWork> {
    return this.http.delete<TimeWork>(this.url + '/api/TimeWorks/' + id);
  }

  getTimeWorkById(id: number): Observable<TimeWork> {
    return this.http.get<TimeWork>(this.url + '/api/TimeWorks/' + id);
  }

  resolve(route: ActivatedRouteSnapshot) {
    return this.getTimeWorkById(+route.params['id']);
  }
}
