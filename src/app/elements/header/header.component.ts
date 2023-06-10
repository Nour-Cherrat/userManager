import { Component } from '@angular/core';
import {TranslateService} from "@ngx-translate/core";
import {MainService} from "../../services/main.service";

type languages = {
    value: string,
    img: string
}

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent {


  //protected readonly onlanguagechange = onlanguagechange;

  // selectedLanguage: string;

  constructor(private translateService: TranslateService,
              public mainService: MainService) {
    // this.selectedLanguage = 'en'; // Set the default language

    // Add supported languages
    // this.translateService.addLangs(['en', 'fr']);

    // Set the default language
    // this.translateService.setDefaultLang('en');
  }

  changeLanguage(selectedLanguage: languages) {
    this.translateService.use(selectedLanguage.value);
  }

}
