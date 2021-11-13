import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

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
    private router: Router,
    private activatedRoute: ActivatedRoute,
    private listaProdutosService: ListaProdutosService,
  ) {
  }

  ngOnInit(): void {
  }

  public editar(produto: Produto): void {
    this.router.navigate([
      '..',
      'editar-produto',
      produto.id,
    ], {
      relativeTo: this.activatedRoute,
    });
  }

}
