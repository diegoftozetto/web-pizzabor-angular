import { Component, OnDestroy, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { ActivatedRoute, Params } from '@angular/router';

import { Subject } from 'rxjs';
import {
  take,
  takeUntil,
} from 'rxjs/operators';

import { Produto } from '@pizzabor/common';

import { ProdutoEdicaoService } from '../../services/produto-edicao/produto-edicao.service';

@Component({
  selector: 'pizzabor-produto',
  templateUrl: './produto.component.html',
  styleUrls: ['./produto.component.css']
})
export class ProdutoComponent implements OnInit, OnDestroy {

  public formGroup: FormGroup = this.formBuilder.group({
    _id: [''],
    imagem: [''],
    nome: [''],
    categoria: [''],
    tamanho: [''],
    preco: [''],
    descricao: [''],
  });

  private subUnsubscribe: Subject<void> = new Subject();

  constructor(
    private produtoEdicaoService: ProdutoEdicaoService,
    private activatedRoute: ActivatedRoute,
    private formBuilder: FormBuilder,
  ) { }

  ngOnInit(): void {
    this.activatedRoute.params.pipe(
      takeUntil(this.subUnsubscribe),
    ).subscribe((params: Params) => {
      const produtoId: number = +params.id;
      this.produtoEdicaoService.get(produtoId).pipe(
        take(1),
      ).subscribe((produto: Produto) => {
        this.formGroup.setValue(produto.asJson());
      });
    });
  }

  ngOnDestroy(): void {
    this.subUnsubscribe.next();
    this.subUnsubscribe.complete();
  }

  public salvar(): void {
  }

}
