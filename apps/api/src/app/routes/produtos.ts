import {
  NextFunction,
  Request,
  Response,
  Router,
} from "express";

import {
  IProduto,
} from '@pizzabor/common';

import { getCollection } from "../util/mongodb";

export const produtosRouter = Router();

const arrayCategoriaPri = [
  'pizza_salgada',
  'pizza_doce',
  'massa',
  'bebida',
  'outro'
];

produtosRouter.get('/', async (req: Request, res: Response, next: NextFunction) => {
  const produtos = await getCollection<IProduto>(
    req.app,
    'produtos',
  ).find().toArray();

  const produtosOrdenadosPorPrioridade = produtos.sort((a, b) => {
    return arrayCategoriaPri.indexOf(a.categoria.valueOf()) - arrayCategoriaPri.indexOf(b.categoria.valueOf());
  })

  res.json(produtosOrdenadosPorPrioridade);
});
