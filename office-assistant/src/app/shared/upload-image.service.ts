import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { UserSettings } from '../model/user-settings/userSettings.model';

@Injectable({
  providedIn: 'root'
})
export class UploadImageService {

  mainURL: string = 'http://localhost:57127/api/UserSettings';

  constructor(private http: HttpClient) { }

  postImageFile(caption: string, fileToUpload: File, username: string) {
    const url = 'http://localhost:57127/api/upload/';
    const formData: FormData = new FormData();
    formData.append('Image', fileToUpload, fileToUpload.name);
    formData.append('AvatarCaption', caption);
    formData.append('UserName', username);
    return this.http.put(url + username, formData);
  }

  getUserSettingsByLogged(username): Observable<UserSettings> {
    return this.http.get<UserSettings>(this.mainURL);
  }

  getImage(username: string) {
    return this.http.get('http://localhost:57127/api/upload/image/' + username);
  }
}
