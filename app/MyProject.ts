import { Component } from '@angular/core';

@Component({
  selector: 'myproject',
  template: `
  <h1>Menu </h1>
  <ul>
  <li><a [routerLink]="['/Registration']">Registration </a></li>
  <li><a [routerLink]="['/Contact']">Contact</a></li>
  </ul><hr><hr>
  <router-outlet></router-outlet> 
  `
})
export class MyProjectComponent {
  title = 'wipro69';
}
