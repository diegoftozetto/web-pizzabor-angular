import { JwtHelperService } from "@auth0/angular-jwt";
import { IUsuario } from "@pizzabor/common";

export default class Util {

  static getUsuarioLogado(): IUsuario {
    let jwtHelper: JwtHelperService = new JwtHelperService();

    var token: string = localStorage.getItem("jwt") || '';
    let iUsuario: IUsuario = jwtHelper.decodeToken(token);

    return iUsuario;
  }
}
