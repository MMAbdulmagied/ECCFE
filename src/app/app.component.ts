import { Component } from '@angular/core';
import { TranslateService } from '@ngx-translate/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'ECC-FE';

  constructor(public translate: TranslateService) {
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
}
