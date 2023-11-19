import {Injectable} from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {GeralUtils} from "./geralUtils";
import {Observable} from "rxjs";
import {PublicacaoRetornoModel} from "../models/publicacao.model";
import {MatSnackBar} from "@angular/material/snack-bar";

@Injectable({
  providedIn: 'root'
})
export class PublicacaoService {
  private readonly baseUrl = GeralUtils.BASE_URL;
  private readonly path = 'v1/publicacao'

  objPublicacoes!: PublicacaoRetornoModel[] | any;

  constructor(
    public http: HttpClient,
    public alert: MatSnackBar
  ) {
  }

  cadastrar(body: FormData): Observable<any> {
    return this.http.post(`${this.baseUrl}${this.path}`, body, {responseType: 'text'});
  }

  obterTodos(): Observable<PublicacaoRetornoModel[]> {
    return this.http.get<PublicacaoRetornoModel[]>((`${this.baseUrl}${this.path}`))
  }

  carregarPublicacoes() {
    this.obterTodos().subscribe({
      next: (response) => {
        this.objPublicacoes = response;
        if (response.length == 0) {
          this.alert.open('Nenhuma publicação feita até o momento', 'Fechar', GeralUtils.configAlert)
        }
      },
      error: (error) => {
        console.log(error)
        this.alert.open(error, 'Fechar', GeralUtils.configAlert)
      }
    })
  }

}
