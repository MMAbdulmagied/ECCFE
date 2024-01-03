import { Component } from '@angular/core';
import { TranslateService } from '@ngx-translate/core';
import { LoginService } from './Services/login.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'ECC-FE';

  constructor(public translate: TranslateService, public loginService: LoginService, private _router: Router) {
    // this language will be used as a fallback when a translation isn't found in the current language
    translate.setDefaultLang('en-US');

    // the lang to use, if the lang isn't available, it will use the current loader to get them
    translate.use('en-US');
  }
  langtoggle() {
    if (this.translate.currentLang == 'en-US') {
      this.translate.use('ar-SA');
    }
    else {
      this.translate.use('en-US');
    }
  }
  onLogout() {
    this.loginService.isLogIn = false;
    localStorage.removeItem("user");
    this._router.navigateByUrl('/');
  }
}
