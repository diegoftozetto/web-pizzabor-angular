import { Injectable } from "@angular/core";
import { CanActivate, Router } from "@angular/router";
import { JwtHelperService } from "@auth0/angular-jwt";
import { IUsuario } from "@pizzabor/common";


@Injectable()
export class AuthGuard implements CanActivate {
  constructor(private router: Router) {
  }
  canActivate() {
    let jwtHelper: JwtHelperService = new JwtHelperService();

    var token = localStorage.getItem("jwt") || '';
    let iUsuario: IUsuario =  jwtHelper.decodeToken(token);

    if (token && !jwtHelper.isTokenExpired(token) && iUsuario.administrador) {
      return true;
    }
    this.router.navigate(["/login"]);
    return false;
  }
}
