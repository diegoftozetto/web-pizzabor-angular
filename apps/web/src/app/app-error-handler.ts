import { HttpErrorResponse } from "@angular/common/http";
import { ErrorHandler, Injectable, NgZone } from "@angular/core";
import { Router } from "@angular/router";

import { MessageService } from "primeng/api";

@Injectable()
export class AppErrorHandler extends ErrorHandler {

  constructor(
    private router: Router,
    private ngZone: NgZone,
    private messageService: MessageService,
  ) {
    super();
  }

  public handleError(err: any): void {
    if (err instanceof HttpErrorResponse) {
      this.handleHttpErrorResponse(err);
      return;
    }
    console.error(err);
    this.messageService.add({
      severity: 'error',
      summary: 'Esta aplicação encontrou um erro',
      detail: 'Contate o suporte técnico.',
    });
  }

  private handleHttpErrorResponse(err: HttpErrorResponse): void {
    this.ngZone.run(() => {
      if (err.status === 401) {
        window.localStorage.removeItem('jwt');
        this.router.navigate(['/login'], {
          skipLocationChange: true,
        });
        return;
      }
      this.messageService.add({
        severity: 'error',
        summary: `Erro de servidor: [${err.status}] ${err.statusText}`,
        detail: err.error,
      });
    });
  }

}
