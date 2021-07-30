import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { User } from '../model/register-login/user.model';
import { Observable } from 'rxjs';
import { UserSettings } from '../model/user-settings/userSettings.model';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  private readonly url = "http://localhost:57127"; 

  constructor(private http: HttpClient) { }

  newUser(user: User) {
    const result: User = {
      UserName: user.UserName,
      Password: user.Password,
      Email: user.Email,
      FirstName: user.FirstName,
      LastName: user.LastName,
      VacLimit: '15' // default
    }
    return this.http.post(this.url + '/api/User/Register', result);
  }

  authenticationLogin(username, password) {
    var data = "username=" + username + "&password=" + password + "&grant_type=password";
    var requestHeader = new HttpHeaders({ 'Content-Type': 'application/x-www-urlencoded' });
    return this.http.post(this.url + '/token', data, { headers: requestHeader });
  }

  getLogedUser() {
    return this.http.get(this.url + '/api/GetUser', { headers: new HttpHeaders({ 'Authorization': 'Bearer ' + localStorage.getItem('userToken') }) });
  }

  updateVacLimit(limit: string, username: string) {
    const result: User = {
      UserName: username,
      VacLimit: limit
    }
    return this.http.put(this.url + '/api/User/Update/' + username, result);
  }

  getAllUsers(): Observable<User[]> {
    return this.http.get<User[]>(this.url + '/api/User/GetAll');
  }

  // post dla userSettings default

  newSettingsForUser(user: User) {
    const resultSettings: UserSettings = {
      UserName: user.UserName,
      AvatarName: 'default.png',
      StyleMode: 0
    }
    return this.http.post<UserSettings>(this.url + '/api/UserSettings', resultSettings);
  }
}
