import { ICarrinho, IItem } from "@pizzabor/common";

export class Carrinho {

  constructor(
    public readonly id: number,
    public userId: number,
    public items: IItem[],
  ) {
  }

  public static fromJson(iProduto: ICarrinho): Carrinho {
    return new Carrinho(
      iProduto._id,
      iProduto.userId,
      iProduto.items,
    );
  }

}
