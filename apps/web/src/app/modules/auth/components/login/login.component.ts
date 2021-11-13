import { HttpErrorResponse } from '@angular/common/http';
import {
  Component,
  OnInit,
} from '@angular/core';
import {
  FormBuilder,
  FormGroup,
  Validators,
} from '@angular/forms';
import {
  ActivatedRoute,
  Router,
} from '@angular/router';

import { of } from 'rxjs';
import { catchError, take } from 'rxjs/operators';

import { MessageService } from 'primeng/api';

import { AuthResult, IUsuario } from '@pizzabor/common';

import { AuthService } from '../../services/auth/auth.service';

@Component({
  selector: 'pizzabor-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  public formGroup: FormGroup = this.formBuilder.group({
    login: ['', Validators.required],
    senha: ['', Validators.required],
  });

  public carregando = false;

  constructor(
    private activatedRoute: ActivatedRoute,
    private router: Router,
    private messageService: MessageService,
    private authService: AuthService,
    private formBuilder: FormBuilder,
  ) {
  }

  public fazerLogin(): void {
    this.carregando = true;
    const body: Pick<IUsuario, 'login' | 'senha'> = this.formGroup.value;
    this.authService.login(body).pipe(
      take(1),
      catchError((err: HttpErrorResponse) => {
        this.carregando = false;
        if (err.status === 401) {
          this.messageService.add({
            severity: 'warn',
            summary: 'Usuário ou senha inválidos',
          });
          return of(undefined);
        }
        throw err;
      }),
    ).subscribe((result?: AuthResult) => {
      this.carregando = false;
      if (result?.jwt) {
        this.messageService.add({
          severity: 'success',
          summary: `Olá, ${result.usuario.nome}!`,
          detail: result.usuario.administrador
            ? 'Você é administrador!'
            : 'Estamos redirecionando você para o conteúdo...',
        });
        window.localStorage.setItem('jwt', result.jwt);
        setTimeout(() => {
          if(result.usuario.administrador) {
            this.router.navigate([ '/area-restrita' ]);
          } else {
            this.router.navigate([ '/home-logado' ]);
          }
        }, 1000);
      }
    });
  }

  ngOnInit(): void {
  }

}
