import { HttpClient } from '@angular/common/http';
import {
  Inject,
  Injectable,
} from '@angular/core';
import { IItem, Item } from '@pizzabor/common';

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

  public get(id: number): Observable<Item[]> {
    return this.httpClient.get<IItem[]>(`${this.apiBaseUrl}/carrinhos/${id}`).pipe(
      map((iItem: IItem[]) => {
        return iItem.map((iItem: IItem) => Item.fromJson(iItem));
      }),
    );
  }
}
