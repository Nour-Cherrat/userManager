import { Component } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent {

  languages = [
    { id:1, name:'EN'},
    { id:2, name:'FR'}
  ];
}
