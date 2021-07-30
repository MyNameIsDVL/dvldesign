import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { map, filter } from 'rxjs/operators';
import { Vacation } from '../model/vacations/vacation.model';

@Injectable({
  providedIn: 'root'
})
export class VacationsService {

  private readonly url = "http://localhost:57127"; 

  constructor(private http: HttpClient) {
   }

  newVacation(vac: Vacation) {
    const result: Vacation = {
      UserName: vac.UserName,
      Type: vac.Type,
      Description: vac.Description,
      VacDays: vac.VacDays,
      DateIn: vac.DateIn,
      DateTo: vac.DateTo
    }
 
    return this.http.post(this.url + '/api/Vacations', result);
  }

  getVacations(): Observable<Vacation[]> {
    return this.http.get<Vacation[]>(this.url + '/api/Vacations');
  }

  getVacationsByLogged(username: string): Observable<Vacation[]> {
    return this.http.get<Vacation[]>(this.url + '/api/Vacations').pipe(map(vacation => vacation.filter(item => item.UserName === username)));
  }

  removeVacationById(id: number): Observable<Vacation> {
    return this.http.delete<Vacation>(this.url + '/api/Vacations/' + id);
  }
}
