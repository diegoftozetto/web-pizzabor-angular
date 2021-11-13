import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule } from '@angular/forms';

import { InputTextModule } from 'primeng/inputtext';
import { ButtonModule } from 'primeng/button';
import { DropdownModule } from 'primeng/dropdown';

import { ProdutoEdicaoRoutingModule } from './produto-edicao-routing.module';
import { ProdutoComponent } from './components/produto/produto.component';
import { SrcDebounceDirective } from './directives/src-debounce/src-debounce.directive';


@NgModule({
  declarations: [
    ProdutoComponent,
    SrcDebounceDirective
  ],
  imports: [
    CommonModule,
    ProdutoEdicaoRoutingModule,
    ReactiveFormsModule,
    InputTextModule,
    ButtonModule,
    DropdownModule,
  ],
  exports: [
    ProdutoComponent,
    SrcDebounceDirective,
  ],
})
export class ProdutoEdicaoModule { }
