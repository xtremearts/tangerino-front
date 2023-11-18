import {NgModule} from '@angular/core';
import {BrowserModule} from '@angular/platform-browser';

import {AppRoutingModule} from './app-routing.module';
import {AppComponent} from './app.component';
import {MatTabsModule} from "@angular/material/tabs";
import {BrowserAnimationsModule} from "@angular/platform-browser/animations";
import {MatButtonModule} from "@angular/material/button";
import {MatSidenavModule} from "@angular/material/sidenav";
import {MatListModule} from "@angular/material/list";
import {UsuarioModule} from "./pages/usuario/usuario.module";
import {InterceptorModule} from "./services/interceptors/interceptor.module";
import {HomeModule} from "./pages/home/home.module";

@NgModule({
  declarations: [
    AppComponent,
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
    HomeModule

  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
