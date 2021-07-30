import { SecurityContext } from '@angular/core';
import { Component, OnInit } from '@angular/core';
import { DomSanitizer, SafeUrl } from '@angular/platform-browser';
import { Router } from '@angular/router';
import { User } from 'src/app/model/register-login/user.model';
import { UploadImageService } from 'src/app/shared/upload-image.service';
import { UserService } from 'src/app/store/user.service';

@Component({
  selector: 'app-home-controller',
  templateUrl: './home.controller.html',
  styleUrls: ['./home.controller.css']
})
export class HomeController implements OnInit {

  claim: User;

  imageURL: SafeUrl = "/assets/images/default.png";
  fileToUpload: File = null;

  constructor(private router: Router, private userService: UserService, private uploadImage: UploadImageService, private sanitizer: DomSanitizer) { }

  ngOnInit(): void {
    this.userService.getLogedUser().subscribe((data: User) => {
      this.claim = data;
      this.getImageUploaded(this.claim.UserName);
    });
  }

  logOut() {
    localStorage.removeItem('userToken');
    this.router.navigate(['/logIn'])
  }

  goToHomePage() {
    this.router.navigate(['home']);
  }

  goToVacationsPage() {
    this.router.navigate(['home/vacations']);
  }

  goToTimeWorkPage() {
    this.router.navigate(['home/timeWork']);
  }

  goToQuestionnairePage() {
    this.router.navigate(['home/questionnaire']);
  }

  handleFileInput(file: FileList) {
    this.fileToUpload = file.item(0);

    let reader = new FileReader();
    reader.onload = (event: any) => {
      this.imageURL = event.target.result;
    }
    reader.readAsDataURL(this.fileToUpload);
  }

  uploadImg({caption, image, username}) {
    this.uploadImage.postImageFile(caption.value, this.fileToUpload, username).subscribe( data => {
      caption.value = null;
      image.value = null;
    });
  }

  getImageUploaded(username: string) {
    this.uploadImage.getImage(username).subscribe((blob: any) => {
      let objectURL = 'data:image/png;base64,' + blob;
      this.imageURL = this.sanitizer.bypassSecurityTrustUrl(objectURL);
    });
  }

}
