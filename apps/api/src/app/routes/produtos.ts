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

export const produtosRouter = Router();

produtosRouter.get('/', async (req: Request, res: Response, next: NextFunction) => {
  const produtos = await getCollection<IProduto>(
    req.app,
    'produtos',
  ).find().toArray();

  const produtosOrdenadosPorPrioridade = produtos.sort((a, b) => {
    return CATEGORIA_PRIORIDADE.indexOf(a.categoria) - CATEGORIA_PRIORIDADE.indexOf(b.categoria);
  })

  res.json(produtosOrdenadosPorPrioridade);
});

produtosRouter.get('/:_id', async (req: Request, res: Response, next: NextFunction) => {
  const _id: number = +req.params._id;
  const produto = await getCollection<IProduto>(
    req.app,
    'produtos',
  ).findOne({
    _id: _id,
  });
  res.json(produto);
});

produtosRouter.put('/:_id', async (req: Request, res: Response, next: NextFunction) => {
  const _id: number = +req.params._id;
  const body: IProduto = req.body;
  const results = await getCollection<IProduto>(
    req.app,
    'produtos',
  ).findOneAndReplace({
    _id: _id,
  }, body);
  res.json(results);
});
