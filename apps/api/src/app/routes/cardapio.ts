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
import { CATEGORIA_PRIORIDADE } from "../util/constants";

export const cardapioRouter = Router();

cardapioRouter.get('/', async (req: Request, res: Response, next: NextFunction) => {
  const produtos = await getCollection<IProduto>(
    req.app,
    'produtos',
  ).find().toArray();

  const produtosOrdenadosPorPrioridade = produtos.sort((a, b) => {
    return CATEGORIA_PRIORIDADE.indexOf(a.categoria) - CATEGORIA_PRIORIDADE.indexOf(b.categoria);
  })

  res.json(produtosOrdenadosPorPrioridade);
});
