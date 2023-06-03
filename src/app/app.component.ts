import { Component } from '@angular/core';
import { TranslateService } from '@ngx-translate/core';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {

  title = 'userManager';
  stateOptions: any[];

  constructor(private translate: TranslateService) {

    this.stateOptions = [
      { label: 'english', value: 'en' },
      { label: 'french', value: 'fr' },
    ];
    // this language will be used as a fallback when a translation isn't found in the current language
    translate.setDefaultLang('en');

    // the lang to use, if the lang isn't available, it will use the current loader to get them
    translate.use('en');
  }

  public onLanguageChange(item: any) {
    this.translate.use(item.value);
  }



}
