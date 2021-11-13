
import { Inject, Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

import { Observable } from 'rxjs';
import {
  map,
} from 'rxjs/operators';

import {
  Produto,
  IProduto,
} from '@pizzabor/common';

@Injectable({
  providedIn: 'root'
})
export class CardapioService {

  constructor(
    @Inject('API_BASE_URL') private apiBaseUrl: string,
    private httpClient: HttpClient,
  ) {
  }

  public getAll(): Observable<Produto[]> {
    return this.httpClient.get<IProduto[]>(`${this.apiBaseUrl}/cardapio`).pipe(
      map((iProdutos: IProduto[]) => {
        return iProdutos.map((iProduto: IProduto) => new Produto(
          iProduto._id,
          iProduto.imagem,
          iProduto.nome,
          iProduto.categoria,
          iProduto.tamanho,
          iProduto.preco,
          iProduto.descricao,
        ));
      }),
    );
  }
}
