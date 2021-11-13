import { HttpClient } from '@angular/common/http';
import {
  Inject,
  Injectable,
} from '@angular/core';
import { Carrinho, ICarrinho } from '@pizzabor/common';

import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class ListaProdutosCarrinhoService {

  constructor(
    @Inject('API_BASE_URL') private apiBaseUrl: string,
    private httpClient: HttpClient,
  ) {
  }

  public get(id: number): Observable<Carrinho[]> {
    return this.httpClient.get<ICarrinho[]>(`${this.apiBaseUrl}/carrinho/${id}`).pipe(
      map((iCarrinho: ICarrinho[]) => {
        return iCarrinho.map((iCarrinho: ICarrinho) => Carrinho.fromJson(iCarrinho));
      }),
    );
  }
}
