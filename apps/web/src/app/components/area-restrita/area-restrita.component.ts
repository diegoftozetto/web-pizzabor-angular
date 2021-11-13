import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { MenuItem } from 'primeng/api';

@Component({
  selector: 'pizzabor-area-restrita',
  templateUrl: './area-restrita.component.html',
  styleUrls: ['./area-restrita.component.css']
})
export class AreaRestritaComponent implements OnInit {

  constructor(
    private router: Router,
  ) {
  }

  ngOnInit(): void {
  }

  public items: MenuItem[] = [
    {
      icon: 'pi pi-arrow-left',
      routerLink: ['/home'],
    },
    {
      label: 'Lista de Produtos',
      icon: 'pi pi-list',
      routerLink: ['/area-restrita'],
    }
  ];

  public logout(): void {
    window.localStorage.removeItem('jwt');
    this.router.navigate([ '/home' ]);
  }

}
