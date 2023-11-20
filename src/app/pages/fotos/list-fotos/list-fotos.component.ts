import { Component, OnInit } from '@angular/core';
import {MatDialog} from "@angular/material/dialog";
import {CadFotosComponent} from "../cad-fotos/cad-fotos.component";
import {AlbumService} from "../../../services/album.service";
import {GeralUtils} from "../../../services/geralUtils";

@Component({
  selector: 'app-list-fotos',
  templateUrl: './list-fotos.component.html',
  styleUrls: ['./list-fotos.component.css']
})
export class ListFotosComponent implements OnInit {
  base64Image = GeralUtils.BASE64_IMAGEM;

  constructor(
    public modal:MatDialog,
    public service: AlbumService
  ) { }

  ngOnInit(): void {
    this.service.carregarAlbuns()

  }


  cadastrarFotos() {
    this.modal.open(CadFotosComponent, {
      width: '80%'
    })
  }



}
