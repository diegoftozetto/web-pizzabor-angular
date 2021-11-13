import { Component, OnDestroy, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { ActivatedRoute, Params, Router } from '@angular/router';

import { Subject } from 'rxjs';
import {
  take,
  takeUntil,
} from 'rxjs/operators';

import { Produto, IProduto } from '@pizzabor/common';

import { ProdutoEdicaoService } from '../../services/produto-edicao/produto-edicao.service';
import { ModifyResult } from 'mongodb';

@Component({
  selector: 'pizzabor-produto',
  templateUrl: './produto.component.html',
  styleUrls: ['./produto.component.css']
})
export class ProdutoComponent implements OnInit, OnDestroy {

  categorias: Object[] = [
    { name: 'Pizza Salgada', code: 'pizza_salgada' },
    { name: 'Pizza Doce', code: 'pizza_doce' },
    { name: 'Massa', code: 'massa' },
    { name: 'Bebida', code: 'bebida' },
    { name: 'Outro', code: 'outro' },
  ];

  tamanhos: Object[] = [
    { name: 'Pequena', code: 'Pequena' },
    { name: 'Média', code: 'Média' },
    { name: 'Grande', code: 'Grande' },
    { name: '350ml', code: '350ml' },
    { name: '500ml', code: '500ml' },
    { name: '1L', code: '1L' },
    { name: '2L', code: '2L' },
    { name: 'Outro', code: 'outro' },
  ];

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
    private router: Router,
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
    const iProduto: IProduto = this.formGroup.value;
    this.produtoEdicaoService.put(iProduto).subscribe(
      (results: ModifyResult<IProduto>) => {
        if (results.ok) {
          this.router.navigate(['/area-restrita']);
        }
      },
    );
  }

}
