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
      label: 'Cardápio',
      icon: 'pi pi-book',
      routerLink: [ '/home' ],
    },
    {
      label: 'Sobre',
      icon: 'pi pi-info-circle',
      routerLink: [ '/home/sobre' ],
    },
    {
      label: 'Entrar',
      icon: 'pi pi-sign-in',
    },
  ];

}
