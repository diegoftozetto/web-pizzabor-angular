

import { Component, OnInit } from '@angular/core';
import { MenuItem } from 'primeng/api';
import { Router } from '@angular/router';

@Component({
  selector: 'pizzabor-home-logado',
  templateUrl: './home-logado.component.html',
  styleUrls: ['./home-logado.component.css']
})
export class HomeLogadoComponent implements OnInit {

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
      label: 'Carrinho de Compras',
      icon: 'pi pi-shopping-cart',
      routerLink: ['/home-logado/lista-produtos-carrinho'],
    }
  ];

  public logout(): void {
    window.localStorage.removeItem('jwt');
    this.router.navigate(['/home']);
  }

}
