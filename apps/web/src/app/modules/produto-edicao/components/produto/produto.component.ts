import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';

@Component({
  selector: 'pizzabor-produto',
  templateUrl: './produto.component.html',
  styleUrls: ['./produto.component.css']
})
export class ProdutoComponent implements OnInit {

  public formGroup: FormGroup = this.formBuilder.group({
    _id: [''],
    imagem: [''],
    nome: [''],
    categoria: [''],
    tamanho: [''],
    preco: [''],
    descricao: [''],
  });

  constructor(
    private formBuilder: FormBuilder,
  ) { }

  ngOnInit(): void {
  }

  public salvar(): void {
  }

}
