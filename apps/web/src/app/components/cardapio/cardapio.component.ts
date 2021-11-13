import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

import { Observable } from 'rxjs';

import { Produto } from '@pizzabor/common';

import { CardapioService } from '../../services/cardapio/cardapio.service';

@Component({
  selector: 'pizzabor-cardapio',
  templateUrl: './cardapio.component.html',
  styleUrls: ['./cardapio.component.css']
})
export class CardapioComponent implements OnInit {

  public produtos$: Observable<Produto[]> = this.cardapioService.getAll();

  constructor(
    private router: Router,
    private cardapioService: CardapioService,
  ) {
  }

  ngOnInit(): void {
  }

  public carrinhoCompras(): void {
    this.router.navigate(['/home-logado']);
  }

}
