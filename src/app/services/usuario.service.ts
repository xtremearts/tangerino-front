import {Injectable} from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {GeralUtils} from "./geralUtils";
import {LoginFilterModel} from "../models/login-filter.model";
import {Observable} from "rxjs";
import {UsuarioModel} from "../models/usuario.model";

@Injectable({
  providedIn: 'root'
})
export class UsuarioService {
  private readonly baseUrl = GeralUtils.BASE_URL;
  private readonly path = 'v1/login'
  private readonly pathLogin = 'v1/login'

  public usuarioLogado: UsuarioModel | undefined;

  constructor(
    public http: HttpClient
  ) {
  }

  autenticarUsuario(body: LoginFilterModel): Observable<UsuarioModel> {
    console.log(this.baseUrl + this.pathLogin)
    return this.http.post<UsuarioModel>(`${this.baseUrl}${this.pathLogin}`, body);
  }

}
