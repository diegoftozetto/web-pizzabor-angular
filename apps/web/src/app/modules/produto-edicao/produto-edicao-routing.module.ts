import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { ProdutoComponent } from './components/produto/produto.component';

const routes: Routes = [
  {
    path: ':id',
    component: ProdutoComponent,
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ProdutoEdicaoRoutingModule { }
