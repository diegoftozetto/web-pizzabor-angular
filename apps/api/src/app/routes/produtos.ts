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

produtosRouter.get('/', async (req: Request, res: Response, next: NextFunction) => {
  const produtos = await getCollection<IProduto>(
    req.app,
    'produtos',
  ).find().toArray();
  res.json(produtos.sort((a, b) => a.nome.localeCompare(b.nome)));
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
