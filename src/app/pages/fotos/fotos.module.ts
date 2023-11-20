import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { FotosRoutingModule } from './fotos-routing.module';
import { ListFotosComponent } from './list-fotos/list-fotos.component';
import {HomeModule} from "../home/home.module";
import {FormsModule, ReactiveFormsModule} from "@angular/forms";
import {MatButtonModule} from "@angular/material/button";
import {MatIconModule} from "@angular/material/icon";


@NgModule({
  declarations: [
    ListFotosComponent
  ],
    imports: [
        CommonModule,
        FotosRoutingModule,
        HomeModule,
        FormsModule,
        ReactiveFormsModule,
        MatButtonModule,
        MatIconModule
    ]
})
export class FotosModule { }
