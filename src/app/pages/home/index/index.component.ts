import { Component, OnInit } from '@angular/core';
import {Router} from "@angular/router";
import {GeralUtils} from "../../../services/geralUtils";
import {MatSnackBar} from "@angular/material/snack-bar";

@Component({
  selector: 'app-index',
  templateUrl: './index.component.html',
  styleUrls: ['./index.component.css']
})
export class IndexComponent implements OnInit {

  constructor(
    public router: Router,
    public alert: MatSnackBar

  ) { }

  ngOnInit(): void {
    console.log(GeralUtils.usuarioLogado);
    if(!GeralUtils.usuarioLogado) {
      this.router.navigate(['/usuario/login'])
      this.alert.open("Usuário não logado", 'Fechar', GeralUtils.configAlert);
    }
  }

}
