import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';

import {HomeRoutingModule} from './home-routing.module';
import {IndexComponent} from './index/index.component';
import {CabecalhoComponent} from "../cabecalho/cabecalho.component";
import {MatListModule} from "@angular/material/list";


@NgModule({
  declarations: [IndexComponent, CabecalhoComponent],
  imports: [
    CommonModule,
    HomeRoutingModule,
    MatListModule
  ]
})
export class HomeModule { }
