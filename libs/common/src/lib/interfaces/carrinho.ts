import { IItem } from "@pizzabor/common";

export interface ICarrinho {
  _id: number;

  userId: number;

  items: IItem[];
}
