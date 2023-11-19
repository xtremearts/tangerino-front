import {Injectable} from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {GeralUtils} from "./geralUtils";
import {Observable} from "rxjs";
import {MatSnackBar} from "@angular/material/snack-bar";
import {ComentarioModel} from "../models/comentario.model";
import {ComentarioFilterModel} from "../models/comentario-filter.model";

@Injectable({
  providedIn: 'root'
})
export class ComentarioService {
  private readonly baseUrl = GeralUtils.BASE_URL;
  private readonly path = 'v1/comentario'

  constructor(
    public http: HttpClient,
    public alert: MatSnackBar
  ) {
  }

  cadastrar(body: ComentarioFilterModel): Observable<ComentarioModel[]> {
    return this.http.post<ComentarioModel[]>(`${this.baseUrl}${this.path}`, body);
  }

  obterTodos(): Observable<ComentarioModel[]> {
    return this.http.get<ComentarioModel[]>((`${this.baseUrl}${this.path}/obter-todos-por-usuario`))
  }

  obterPorPublicacao(id: number): Observable<ComentarioModel[]> {
    return this.http.get<ComentarioModel[]>((`${this.baseUrl}${this.path}/obter-por-publicacao/${id}`))
  }



}
