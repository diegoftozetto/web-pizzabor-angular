import { Component, OnInit } from '@angular/core';

import { MenuItem } from 'primeng/api';

@Component({
  selector: 'pizzabor-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

  public items: MenuItem[] = [
    {
      label: 'Home',
      icon: 'pi pi-home',
      routerLink: [ '/home' ],
    },
  ];

}
