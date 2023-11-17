import {Injectable} from '@angular/core';
import {HttpClient, HttpHeaders} from "@angular/common/http";
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

  constructor(
    public http: HttpClient
  ) {
  }

  autenticarUsuario(body: LoginFilterModel):Observable<any> {
    return this.http.post(`${this.baseUrl}${this.pathLogin}`, body, {responseType: 'text' });
  }

}
