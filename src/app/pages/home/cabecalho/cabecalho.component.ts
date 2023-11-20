import { Component, OnInit } from '@angular/core';
import {CadPublicacaoComponent} from "../publicacao/cad-publicacao/cad-publicacao.component";
import {MatDialog} from "@angular/material/dialog";
import {MatSnackBar} from "@angular/material/snack-bar";
import {Router} from "@angular/router";
import {GeralUtils} from "../../../services/geralUtils";

@Component({
  selector: 'app-cabecalho',
  templateUrl: './cabecalho.component.html',
  styleUrls: ['./cabecalho.component.css']
})
export class CabecalhoComponent implements OnInit {
  showFiller = true;

  constructor(
    public modal: MatDialog,
    public alert: MatSnackBar,
    public route: Router
  ) { }

  ngOnInit(): void {
  }

  modalCriarPost() {
    this.modal.open(CadPublicacaoComponent, {
      width: '50%'
    })
  }

  deslogar() {
    localStorage.removeItem('token');
    localStorage.removeItem('usuarioLogado');
    this.route.navigate(['/usuario/login'])
    this.alert.open('Usuário deslogado com sucesso', 'Fechar', GeralUtils.configAlert);
  }
}
