import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { ActivatedRoute, Params } from '@angular/router';

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
    private activatedRoute: ActivatedRoute,
    private formBuilder: FormBuilder,
  ) { }

  ngOnInit(): void {
    this.activatedRoute.params.subscribe((params: Params) => {
      const produtoId: number = +params.id;
    });
  }

  public salvar(): void {
  }

}
