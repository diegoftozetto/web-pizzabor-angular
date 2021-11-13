import { Component, OnInit } from '@angular/core';
import { MenuItem } from 'primeng/api';

@Component({
  selector: 'pizzabor-area-restrita',
  templateUrl: './area-restrita.component.html',
  styleUrls: ['./area-restrita.component.css']
})
export class AreaRestritaComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

  public items: MenuItem[] = [
    {
      label: 'Lista de Produtos',
      icon: 'pi pi-list',
      routerLink: ['/area-restrita'],
    }
  ];

  public logout(): void {
  }

}
