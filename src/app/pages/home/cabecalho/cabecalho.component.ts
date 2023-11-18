import { Component, OnInit } from '@angular/core';
import {CadPublicacaoComponent} from "../publicacao/cad-post/cad-publicacao.component";
import {MatDialog} from "@angular/material/dialog";

@Component({
  selector: 'app-cabecalho',
  templateUrl: './cabecalho.component.html',
  styleUrls: ['./cabecalho.component.css']
})
export class CabecalhoComponent implements OnInit {
  showFiller = true;

  constructor(
    public modal: MatDialog
  ) { }

  ngOnInit(): void {
  }

  modalCriarPost() {
    this.modal.open(CadPublicacaoComponent, {
      width: '50%'
    })
  }
}
