import { Injectable } from '@angular/core';
import { TranslateService } from '@ngx-translate/core';

type languages = {
  value: string,
  img: string
}

@Injectable({
  providedIn: 'root'
})
export class MainService {

  public currentLanguage: string|undefined;
  public supportedLanguages: languages[] = [
    {
      value: 'en',
      img: 'assets/flags/en.png'
    },
    {
      value: 'fr',
      img: 'assets/flags/fr.jpg'
    }
  ];

  constructor(private translate: TranslateService) {
    // get browser language
    // this.currentLanguage = translate.getBrowserLang() || 'en';
    this.currentLanguage = 'en';
    this.translate.use(this.currentLanguage);
    this.translate.onLangChange.subscribe(value => {
      console.log(`Language changed to : `, value.lang);
      this.currentLanguage = value.lang;
    });
  }
}
