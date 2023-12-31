import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';

import {UsuarioRoutingModule} from './usuario-routing.module';
import {LoginComponent} from './login/login.component';
import {MatFormFieldModule} from "@angular/material/form-field";
import {MatInputModule} from "@angular/material/input";
import {MatButtonToggleModule} from "@angular/material/button-toggle";
import {MatButtonModule} from "@angular/material/button";
import {FormsModule, ReactiveFormsModule} from "@angular/forms";
import {HttpClientModule} from "@angular/common/http";
import { CadUsuarioComponent } from './cad-usuario/cad-usuario.component';
import {MatSnackBarModule} from "@angular/material/snack-bar";


@NgModule({
  declarations: [
    LoginComponent,
    CadUsuarioComponent
  ],
  exports: [
    LoginComponent
  ],
  imports: [
    CommonModule,
    UsuarioRoutingModule,
    MatFormFieldModule,
    MatInputModule,
    MatButtonToggleModule,
    MatButtonModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule,
    MatSnackBarModule
  ]
})
export class UsuarioModule { }
