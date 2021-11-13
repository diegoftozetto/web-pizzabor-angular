import { ICarrinho } from "@pizzabor/common";
import {
  NextFunction,
  Request,
  Response,
  Router,
} from "express";

import { getCollection } from "../util/mongodb";

export const carrinhosRouter = Router();

carrinhosRouter.get('/:userId', async (req: Request, res: Response, next: NextFunction) => {
  const userId: number = +req.params.userId;
  const itemsCarrinho = await getCollection<ICarrinho>(
    req.app,
    'carrinhos',
  ).findOne({
    userId: userId,
  });
  res.json(itemsCarrinho.items);
});
