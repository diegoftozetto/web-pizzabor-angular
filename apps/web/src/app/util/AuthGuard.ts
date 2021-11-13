import { Injectable } from "@angular/core";
import { CanActivate, Router } from "@angular/router";
import { JwtHelperService } from "@auth0/angular-jwt";
import { IUsuario } from "@pizzabor/common";
import Util from "./Util";


@Injectable()
export class AuthGuard implements CanActivate {
  constructor(private router: Router) {
  }
  canActivate() {
    if (Util.getUsuarioLogado() && Util.getUsuarioLogado().administrador) {
      return true;
    }
    this.router.navigate(["/login"]);
    return false;
  }
}
