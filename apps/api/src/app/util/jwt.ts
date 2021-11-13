import * as jsonWebToken from 'jsonwebtoken';

import { IUsuario } from "@pizzabor/common";

import { sanitizeUsuario } from './sanitization';

export const JWT_SECRET_KEY = 'Ch4v3-s3CReTa';

export function criarToken(iUsuario: IUsuario): string {
  return jsonWebToken.sign(
    sanitizeUsuario(iUsuario),
    JWT_SECRET_KEY,
    {
      expiresIn: '20m',
    },
  );
}
