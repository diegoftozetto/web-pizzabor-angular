import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AreaRestritaComponent } from './components/area-restrita/area-restrita.component';
import { CardapioComponent } from './components/cardapio/cardapio.component';
import { HomeLogadoComponent } from './components/home-logado/home-logado.component';

import { HomeComponent } from './components/home/home.component';
import { ListaProdutosCarrinhoComponent } from './components/lista-produtos-carrinho/lista-produtos-carrinho.component';
import { ListaProdutosComponent } from './components/lista-produtos/lista-produtos.component';
import { SobreComponent } from './components/sobre/sobre.component';

import { AuthGuard } from "./util/AuthGuard";

const routes: Routes = [
  {
    path: '',
    pathMatch: 'full',
    redirectTo: '/home/cardapio',
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
    path: 'home-logado',
    component: HomeLogadoComponent,
    children: [
      {
        path: '',
        pathMatch: 'full',
        redirectTo: 'lista-produtos-carrinho',
      },
      {
        path: 'lista-produtos-carrinho',
        component: ListaProdutosCarrinhoComponent,
      }
    ],
  },
  {
    path: 'area-restrita',
    component: AreaRestritaComponent,
    canActivate: [AuthGuard],
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
      {
        path: 'editar-produto',
        loadChildren: () => import(
          './modules/produto-edicao/produto-edicao.module'
        ).then(mod => mod.ProdutoEdicaoModule),
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
