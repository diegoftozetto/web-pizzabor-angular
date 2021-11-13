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
export class ListaProdutosService {

  constructor(
    @Inject('API_BASE_URL') private apiBaseUrl: string,
    private httpClient: HttpClient,
  ) {
  }

  public getAll(): Observable<Produto[]> {
    return this.httpClient.get<IProduto[]>(`${this.apiBaseUrl}/produtos`).pipe(
      map((iProdutos: IProduto[]) => {
        return iProdutos.map((iProduto: IProduto) => Produto.fromJson(iProduto));
      }),
    );
  }
}
