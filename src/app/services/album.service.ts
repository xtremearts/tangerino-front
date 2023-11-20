import {Injectable} from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {GeralUtils} from "./geralUtils";
import {Observable} from "rxjs";
import {AlbumModel} from "../models/album.model";
import {MatSnackBar} from "@angular/material/snack-bar";
import {UsuarioModel} from "../models/usuario.model";

@Injectable({
  providedIn: 'root'
})
export class AlbumService {
  private readonly baseUrl = GeralUtils.BASE_URL;
  private readonly path = 'v1/album'

  objAlbum!: AlbumModel[] | any;

  constructor(
    public http: HttpClient,
    public alert: MatSnackBar
  ) {
  }

  cadastrar(body: FormData): Observable<any> {
    return this.http.post(`${this.baseUrl}${this.path}`, body, {responseType: 'text'});
  }

  obterTodos(): Observable<AlbumModel[]> {
    return this.http.get<AlbumModel[]>((`${this.baseUrl}${this.path}`))
  }


  carregarAlbuns() {
    this.obterTodos().subscribe({
      next: (response) => {
        this.objAlbum = response;

        if (response.length == 0) {
          this.alert.open('Nenhuma imagem cadastrada até o momento', 'Fechar', GeralUtils.configAlert)
        }
      },
      error: (error) => {
        this.alert.open(error.error.message, 'Fechar', GeralUtils.configAlert)
      }
    })
  }

  deletar(id: number): Observable<void> {
    return this.http.delete<void>(`${this.baseUrl}${this.path}/${id}`)
  }

}
