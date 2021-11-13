import { TestBed } from '@angular/core/testing';

import { ProdutoEdicaoService } from './produto-edicao.service';

describe('ProdutoEdicaoService', () => {
  let service: ProdutoEdicaoService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ProdutoEdicaoService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
