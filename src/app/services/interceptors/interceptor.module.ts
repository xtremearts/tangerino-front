import {Injectable, NgModule} from '@angular/core';
import {HTTP_INTERCEPTORS, HttpEvent, HttpHandler, HttpInterceptor, HttpRequest} from "@angular/common/http";
import {Observable} from "rxjs";
import {jwtDecode} from "jwt-decode";
import {UsuarioModel} from "../../models/usuario.model";


Injectable()
export class HttpsRequestInterceptor implements HttpInterceptor {
  intercept(req: HttpRequest<any>,next: HttpHandler): Observable<HttpEvent<any>> {
    var token = localStorage.getItem('token');

    if (typeof token === "string") {
      let usuarioLogado: UsuarioModel;
      usuarioLogado = jwtDecode(token);
      localStorage.setItem('usuarioLogado', usuarioLogado.id.toString())
    }

    const dupReq = req.clone({
      headers: req.headers.set('authorization', (token && token) ? 'Bearer ' + token : '')
    });
    return next.handle(dupReq);
  }
}
@NgModule({
  providers: [{
    provide: HTTP_INTERCEPTORS,
    useClass: HttpsRequestInterceptor,
    multi: true,
  }]
})
export class InterceptorModule { }
