import {NgModule} from '@angular/core';
import {BrowserModule} from '@angular/platform-browser';

import {AppRoutingModule} from './app-routing.module';
import {AppComponent} from './app.component';
import {CabecalhoComponent} from './pages/cabecalho/cabecalho.component';
import {MatTabsModule} from "@angular/material/tabs";
import {BrowserAnimationsModule} from "@angular/platform-browser/animations";
import {MatButtonModule} from "@angular/material/button";
import {MatSidenavModule} from "@angular/material/sidenav";
import {MatListModule} from "@angular/material/list";
import {UsuarioModule} from "./pages/usuario/usuario.module";
import {InterceptorModule} from "./services/interceptors/interceptor.module";

@NgModule({
  declarations: [
    AppComponent,
    CabecalhoComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    MatTabsModule,
    BrowserAnimationsModule,
    MatButtonModule,
    MatSidenavModule,
    MatListModule,
    UsuarioModule,
    InterceptorModule,

  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
