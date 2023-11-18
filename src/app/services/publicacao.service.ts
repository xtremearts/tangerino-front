import {Injectable} from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {GeralUtils} from "./geralUtils";
import {Observable} from "rxjs";

@Injectable({
  providedIn: 'root'
})
export class PublicacaoService {
  private readonly baseUrl = GeralUtils.BASE_URL;
  private readonly path = 'v1/publicacao'

  constructor(
    public http: HttpClient
  ) {
  }

  cadastrar(body: FormData): Observable<any> {
    return this.http.post(`${this.baseUrl}${this.path}`, body, {responseType: 'text'});
  }

}
