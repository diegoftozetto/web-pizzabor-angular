import { Component, OnInit } from '@angular/core';
import { ListaProdutosCarrinhoService } from '../../services/lista-produtos-carrinho/lista-produtos-carrinho.service';
import { ActivatedRoute } from '@angular/router';

import { Observable } from 'rxjs';

import { Subject } from 'rxjs';
import {
  take,
  takeUntil,
} from 'rxjs/operators';
import { Carrinho } from '@pizzabor/common';

@Component({
  selector: 'pizzabor-lista-produtos-carrinho',
  templateUrl: './lista-produtos-carrinho.component.html',
  styleUrls: ['./lista-produtos-carrinho.component.css']
})
export class ListaProdutosCarrinhoComponent implements OnInit {

  public produtosCarrinho$!: Observable<Carrinho[]>;
  private subUnsubscribe: Subject<void> = new Subject();

  constructor(
    private listaProdutosCarrinhoService: ListaProdutosCarrinhoService,
    private activatedRoute: ActivatedRoute,
  ) {
  }

  ngOnInit(): void {
    this.activatedRoute.params.pipe(
      takeUntil(this.subUnsubscribe),
    ).subscribe(() => {
      const userId = 1;
      this.produtosCarrinho$ = this.listaProdutosCarrinhoService.get(userId);
    });
  }

}
