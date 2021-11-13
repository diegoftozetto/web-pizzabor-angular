import { Component, OnInit } from '@angular/core';
import { IUsuario } from '@pizzabor/common';
import { MenuItem } from 'primeng/api';
import Util from '../../util/Util';

@Component({
  selector: 'pizzabor-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
    const iUsuario: IUsuario = Util.getUsuarioLogado();
    if(iUsuario) {
      if(iUsuario.administrador) {
        this.items = [
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
            label: 'Lista de Compras',
            icon: 'pi pi-shopping-cart',
            routerLink: [ '/home-logado' ],
          },
          {
            label: 'Área Restrita',
            icon: 'pi pi-user-edit',
            routerLink: [ '/area-restrita' ],
          },
        ];
      } else {
        this.items = [
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
            label: 'Lista de Compras',
            icon: 'pi pi-shopping-cart',
            routerLink: [ '/home-logado' ],
          },
        ];
      }
    }
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
      routerLink: [ '/area-restrita/lista-produtos' ],
    },
  ];

}
