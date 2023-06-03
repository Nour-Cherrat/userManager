import { Component } from '@angular/core';
import {TranslateService} from "@ngx-translate/core";

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent {

  languages = [
    { value:'en', name:'EN'},
    { value:'fr', name:'FR'}
  ];
  //protected readonly onlanguagechange = onlanguagechange;

  selectedLanguage: string;

  constructor(private translateService: TranslateService) {
    this.selectedLanguage = 'en'; // Set the default language

    // Add supported languages
    this.translateService.addLangs(['en', 'fr']);

    // Set the default language
    this.translateService.setDefaultLang('en');
  }

  changeLanguage() {
    this.translateService.use(this.selectedLanguage);
  }

}
