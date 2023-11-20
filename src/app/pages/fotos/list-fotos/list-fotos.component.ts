import { Component, OnInit } from '@angular/core';
import {MatDialog} from "@angular/material/dialog";
import {CadFotosComponent} from "../cad-fotos/cad-fotos.component";
import {AlbumService} from "../../../services/album.service";
import {GeralUtils} from "../../../services/geralUtils";
import {MatSnackBar} from "@angular/material/snack-bar";
import {UsuarioService} from "../../../services/usuario.service";

@Component({
  selector: 'app-list-fotos',
  templateUrl: './list-fotos.component.html',
  styleUrls: ['./list-fotos.component.css']
})
export class ListFotosComponent implements OnInit {
  base64Image = GeralUtils.BASE64_IMAGEM;

  constructor(
    public modal:MatDialog,
    public service: AlbumService,
    public alert: MatSnackBar,
    public usuarioServic: UsuarioService
  ) { }

  ngOnInit(): void {
    this.service.carregarAlbuns()

  }


  cadastrarFotos() {
    this.modal.open(CadFotosComponent, {
      width: '80%'
    })
  }

  deletarPublicacao(id: number) {
    this.service.deletar(id).subscribe({
      next: () => {
        this.alert.open("Foto excluida com sucesso", 'Fechar', GeralUtils.configAlert)
        this.service.carregarAlbuns()

      },
      error: (error) => {
        this.alert.open(error.error.message, 'Fechar', GeralUtils.configAlert)
      }
    })
  }


}
