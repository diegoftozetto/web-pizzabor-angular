import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ProdutoEdicaoRoutingModule } from './produto-edicao-routing.module';
import { ProdutoComponent } from './components/produto/produto.component';


@NgModule({
  declarations: [
    ProdutoComponent
  ],
  imports: [
    CommonModule,
    ProdutoEdicaoRoutingModule
  ]
})
export class ProdutoEdicaoModule { }
