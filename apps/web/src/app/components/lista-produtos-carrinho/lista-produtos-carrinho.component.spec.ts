import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ListaProdutosCarrinhoComponent } from './lista-produtos-carrinho.component';

describe('ListaProdutosCarrinhoComponent', () => {
  let component: ListaProdutosCarrinhoComponent;
  let fixture: ComponentFixture<ListaProdutosCarrinhoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ListaProdutosCarrinhoComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ListaProdutosCarrinhoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
