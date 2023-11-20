import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';

import {HomeRoutingModule} from './home-routing.module';
import {IndexComponent} from './index/index.component';
import {CabecalhoComponent} from "./cabecalho/cabecalho.component";
import {MatListModule} from "@angular/material/list";
import { CadPublicacaoComponent } from './publicacao/cad-publicacao/cad-publicacao.component';
import {MatDialogModule} from "@angular/material/dialog";
import {MatInputModule} from "@angular/material/input";
import {MatButtonModule} from "@angular/material/button";
import {MatCardModule} from "@angular/material/card";
import {MatIconModule} from "@angular/material/icon";
import {FormsModule, ReactiveFormsModule} from "@angular/forms";
import { LinhaTempoComponent } from './linha-tempo/linha-tempo.component';
import { ListPublicacaoComponent } from './publicacao/list-publicacao/list-publicacao.component';
import { ListComentariosComponent } from './list-comentarios/list-comentarios.component';


@NgModule({
  declarations: [IndexComponent, CabecalhoComponent, CadPublicacaoComponent, LinhaTempoComponent, ListPublicacaoComponent, ListComentariosComponent],
  imports: [
    CommonModule,
    HomeRoutingModule,
    MatListModule,
    MatDialogModule,
    MatInputModule,
    MatButtonModule,
    MatCardModule,
    MatIconModule,
    ReactiveFormsModule,
    FormsModule
  ]
})
export class HomeModule { }
