import { Component, OnInit } from '@angular/core';
import { ListaProdutosCarrinhoService } from '../../services/lista-produtos-carrinho/lista-produtos-carrinho.service';
import { ActivatedRoute } from '@angular/router';

import { Observable } from 'rxjs';

import { Subject } from 'rxjs';
import {
  takeUntil,
} from 'rxjs/operators';
import { IItem } from '@pizzabor/common';

import Util from '../../util/Util';

@Component({
  selector: 'pizzabor-lista-produtos-carrinho',
  templateUrl: './lista-produtos-carrinho.component.html',
  styleUrls: ['./lista-produtos-carrinho.component.css']
})
export class ListaProdutosCarrinhoComponent implements OnInit {

  public produtosCarrinho$!: Observable<IItem[]>;
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
      const id: number = Util.getUsuarioLogado() ? Util.getUsuarioLogado()._id : 0;
      this.produtosCarrinho$ = this.listaProdutosCarrinhoService.get(id);
    });
  }

}
