import { ICarrinho } from "@pizzabor/common";
import {
  NextFunction,
  Request,
  Response,
  Router,
} from "express";

export const carrinhoRouter = Router();

carrinhoRouter.get('/:id', async (req: Request, res: Response, next: NextFunction) => {
  let produtosCarrinho: ICarrinho[] = [
    { _id: 1, imagem: "https://images2.imgbox.com/7a/01/eNA5G8dJ_o.png", nome: "Pizza Portuguesa", categoria: "pizza_salgada", tamanho: "Grande", preco: 49.60, quantidade: 1 },
    { _id: 2, imagem: "https://images2.imgbox.com/a0/52/emVpeCWE_o.png", nome: "Pizza Sensação", categoria: "pizza_doce", tamanho: "Média",  preco: 35.60, quantidade: 1 },
    { _id: 3, imagem: "https://images2.imgbox.com/a5/a4/9yD9YYxw_o.jpg", nome: "Coca-Cola", categoria: "bebida", tamanho: "350ml", preco: 5.50, quantidade: 2 },
  ]
  res.json(produtosCarrinho);
});
