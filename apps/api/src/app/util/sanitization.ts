import { IUsuario } from "@pizzabor/common";

export function checkString(unk: unknown): string {
  if (typeof unk === 'string') {
    return unk;
  }
  const str = JSON.stringify(unk, undefined, 2);
  throw new Error(`O parâmetro não é uma string: ${str}`);
}

export function sanitizeUsuario(iUsuario: IUsuario): Omit<IUsuario, 'senha'> {
  const usuarioSanitizado: IUsuario = {
    ...iUsuario,
  };
  delete usuarioSanitizado.senha;
  return usuarioSanitizado;
}
