import { IProduto } from "@pizzabor/common";

export class Produto {

  constructor(
    public readonly id: number,
    public imagem: string,
    public nome: string,
    public categoria: string,
    public tamanho: string,
    public preco: number,
    public descricao: string
  ) {
  }

  public static fromJson(iProduto: IProduto): Produto {
    return new Produto(
      iProduto._id,
      iProduto.imagem,
      iProduto.nome,
      iProduto.categoria,
      iProduto.tamanho,
      iProduto.preco,
      iProduto.descricao,
    );
  }

  public asJson(): IProduto {
    return {
      _id: this.id,
      imagem: this.imagem,
      nome: this.nome,
      categoria: this.categoria,
      tamanho: this.tamanho,
      preco: this.preco,
      descricao: this.descricao,
    };
  }

}
