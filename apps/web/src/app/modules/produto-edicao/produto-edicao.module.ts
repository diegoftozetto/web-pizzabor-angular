import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule } from '@angular/forms';

import { InputTextModule } from 'primeng/inputtext';
import { ButtonModule } from 'primeng/button';

import { ProdutoEdicaoRoutingModule } from './produto-edicao-routing.module';
import { ProdutoComponent } from './components/produto/produto.component';


@NgModule({
  declarations: [
    ProdutoComponent
  ],
  imports: [
    CommonModule,
    ProdutoEdicaoRoutingModule,
    ReactiveFormsModule,
    InputTextModule,
    ButtonModule,
  ],
  exports: [
    ProdutoComponent,
  ]
})
export class ProdutoEdicaoModule { }
