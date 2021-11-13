import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CardapioComponent } from './components/cardapio/cardapio.component';

import { HomeComponent } from './components/home/home.component';
import { ListaProdutosComponent } from './components/lista-produtos/lista-produtos.component';
import { SobreComponent } from './components/sobre/sobre.component';

const routes: Routes = [
  {
    path: '',
    pathMatch: 'full',
    redirectTo: '/home',
  },
  {
    path: 'home',
    component: HomeComponent,
    children: [
      {
        path: '',
        pathMatch: 'full',
        redirectTo: 'cardapio',
      },
      {
        path: 'cardapio',
        component: CardapioComponent,
      },
      {
        path: 'sobre',
        component: SobreComponent,
      },
    ]
  },
  {
    path: 'area-restrita',
    component: HomeComponent,
    children: [
      {
        path: '',
        pathMatch: 'full',
        redirectTo: 'lista-produtos',
      },
      {
        path: 'lista-produtos',
        component: ListaProdutosComponent,
      },
    ]
  },
];

@NgModule({
  declarations: [
  ],
  imports: [
    RouterModule.forRoot(routes),
  ],
  exports: [
    RouterModule,
  ],
})
export class AppRoutingModule {
}
