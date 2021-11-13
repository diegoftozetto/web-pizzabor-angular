import { ICarrinho } from "@pizzabor/common";

export class Carrinho {

  constructor(
    public readonly id: number,
    public imagem: string,
    public nome: string,
    public categoria: string,
    public tamanho: string,
    public preco: number,
    public quantidade: number,
  ) {
  }

  public static fromJson(iProduto: ICarrinho): Carrinho {
    return new Carrinho(
      iProduto._id,
      iProduto.imagem,
      iProduto.nome,
      iProduto.categoria,
      iProduto.tamanho,
      iProduto.preco,
      iProduto.quantidade,
    );
  }

}
