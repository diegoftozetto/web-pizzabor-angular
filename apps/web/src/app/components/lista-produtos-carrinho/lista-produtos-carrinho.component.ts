import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'pizzabor-lista-produtos-carrinho',
  templateUrl: './lista-produtos-carrinho.component.html',
  styleUrls: ['./lista-produtos-carrinho.component.css']
})
export class ListaProdutosCarrinhoComponent implements OnInit {

  public produtosCarrinho: any[];

  constructor(
  ) {
    this.produtosCarrinho = [
      {nome: "Pizza Portuguesa", imagem: "https://images2.imgbox.com/7a/01/eNA5G8dJ_o.png", preco: 49.60, categoria: "pizza_salgada", tamanho: "Grande", quantidade: 1},
      {nome: "Pizza Sensação", imagem: "https://images2.imgbox.com/a0/52/emVpeCWE_o.png", preco: 35.60, categoria: "pizza_doce", tamanho: "Média", quantidade: 1},
      {nome: "Coca-Cola", imagem: "https://images2.imgbox.com/a5/a4/9yD9YYxw_o.jpg", preco: 5.50, categoria: "bebida", tamanho: "350ml", quantidade: 2},
    ]
  }

  ngOnInit(): void {
  }

}
