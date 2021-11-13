import { HttpClient } from '@angular/common/http';
import {
  Inject,
  Injectable,
} from '@angular/core';

import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';

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
}
