import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { SafeUrl } from '@angular/platform-browser';
import { faSignOutAlt, faInfoCircle, faTools } from '@fortawesome/free-solid-svg-icons';
import { User } from 'src/app/model/register-login/user.model';
import { UserSettings } from 'src/app/model/user-settings/userSettings.model';

@Component({
  selector: 'app-top-nav',
  templateUrl: './top-nav.component.html',
  styleUrls: ['./top-nav.component.css']
})
export class TopNavComponent implements OnInit {

  @Output() logOut = new EventEmitter(); 
  @Output() handleFileInput = new EventEmitter();
  @Output() uploadImg = new EventEmitter();
  @Input() imageURL: SafeUrl;
  @Input() claim: User;
  @Input() uploadByLoggedUser: UserSettings;

  /**Icons */
  faSignOutAlt = faSignOutAlt;
  faInfoCircle = faInfoCircle;
  faTools = faTools;

  ngOnInit(): void {
    this.openCloseMenu();
  }

  logout() {
    this.logOut.emit();
  }

  handleFileInputTem(ev) {
    this.handleFileInput.emit(ev);
  }

  uploadImgTem(caption, image, username) {
    this.uploadImg.emit({caption, image, username});
  }

  private openCloseMenu() {
    const toggle = <HTMLDivElement>document.getElementById('dvl-tools');
    const menu = <HTMLDivElement>document.getElementById('dvl-settings-bar');

    $(toggle).on('click', function() {
      $(menu).toggleClass("active");
    });
  }
}
