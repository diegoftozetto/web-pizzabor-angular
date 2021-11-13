import { TestBed } from '@angular/core/testing';

import { ListaProdutosCarrinhoService } from './lista-produtos-carrinho.service';

describe('ListaProdutosCarrinhoService', () => {
  let service: ListaProdutosCarrinhoService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ListaProdutosCarrinhoService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
