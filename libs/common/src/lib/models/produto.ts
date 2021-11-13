export class Produto {

  constructor(
    public readonly id: number,
    public imagem: string,
    public nome: string,
    public categoria: string,
    public tamanho: string,
    public preco: number,
    public descricao: string
  ) {
  }

}
