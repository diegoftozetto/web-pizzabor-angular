import { IItem } from "@pizzabor/common";

export class Item {

  constructor(
    public produtoId: number,
    public imagem: string,
    public nome: string,
    public categoria: string,
    public tamanho: string,
    public preco: number,
    public quantidade: number,
  ) {
  }

  public static fromJson(iItem: IItem): Item {
    return new Item(
      iItem.produtoId,
      iItem.imagem,
      iItem.nome,
      iItem.categoria,
      iItem.tamanho,
      iItem.preco,
      iItem.quantidade,
    );
  }

}
