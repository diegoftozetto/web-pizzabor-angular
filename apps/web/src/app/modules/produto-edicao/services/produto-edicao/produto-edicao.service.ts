import { HttpClient } from '@angular/common/http';
import {
  Inject,
  Injectable,
} from '@angular/core';

import { ModifyResult } from 'mongodb';

import { Observable } from 'rxjs';
import { map, take } from 'rxjs/operators';

import {
  Produto,
  IProduto,
} from '@pizzabor/common';

@Injectable({
  providedIn: 'root'
})
export class ProdutoEdicaoService {

  constructor(
    @Inject('API_BASE_URL') private apiBaseUrl: string,
    private httpClient: HttpClient,
  ) {
  }

  public get(id: number): Observable<Produto> {
    return this.httpClient.get<IProduto>(`${this.apiBaseUrl}/produtos/${id}`).pipe(
      map((iProduto: IProduto) => {
        return Produto.fromJson(iProduto);
      }),
    );
  }

  public put(iProduto: IProduto): Observable<ModifyResult<IProduto>> {
    return this.httpClient.put<ModifyResult<IProduto>>(
      `${this.apiBaseUrl}/produtos/${iProduto._id}`,
      iProduto,
    ).pipe(
      take(1),
    );
  }
}
