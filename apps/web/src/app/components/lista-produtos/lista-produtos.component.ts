import { Component, OnInit } from '@angular/core';

import { Observable } from 'rxjs';

import { Produto } from '@pizzabor/common';

import { ListaProdutosService } from '../../services/lista-produtos/lista-produtos.service';

@Component({
  selector: 'pizzabor-lista-produtos',
  templateUrl: './lista-produtos.component.html',
  styleUrls: ['./lista-produtos.component.css']
})
export class ListaProdutosComponent implements OnInit {

  public produtos$: Observable<Produto[]> = this.listaProdutosService.getAll();

  constructor(
    private listaProdutosService: ListaProdutosService,
  ) {
  }

  ngOnInit(): void {
  }

  public editar(produto: Produto): void {
  }

}
