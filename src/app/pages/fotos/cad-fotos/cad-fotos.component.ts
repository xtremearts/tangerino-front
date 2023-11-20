import {Component, OnInit} from '@angular/core';
import {MatSnackBar} from "@angular/material/snack-bar";
import {GeralUtils} from "../../../services/geralUtils";
import {AlbumService} from "../../../services/album.service";
import {MatDialog} from "@angular/material/dialog";

@Component({
  selector: 'app-cad-fotos',
  templateUrl: './cad-fotos.component.html',
  styleUrls: ['./cad-fotos.component.css']
})
export class CadFotosComponent implements OnInit {
  files: File | any;
  imagemPreview: any = [];

  constructor(
    public alert: MatSnackBar,
    public service: AlbumService,
    public modal: MatDialog
  ) {
  }

  ngOnInit(): void {
  }


  adicionarImagem($event: Event) {
    // @ts-ignore
    this.files = $event.target.files;
  }

  cadastrarFotos() {

    if (this.files.length > 0) {
      const arquivo = new FormData();

      Array.from(this.files).forEach((result) => {
        // @ts-ignore
        if (result.type != 'image/png' && result.type != 'image/jpeg') {
            this.alert.open('Formato de imagem permitidos: jpg ou png.');
            return
          }
        // @ts-ignore
        arquivo.append('arquivos', result);
      })

      this.service.cadastrar(arquivo).subscribe({
        next: () => {
          this.alert.open('Album de fotos cadastrado com sucesso!', 'Fechar', GeralUtils.configAlert)
          this.service.carregarAlbuns()
          this.modal.closeAll();
        },
        error: (error) => {
          this.alert.open(error.error.message, 'Fechar', GeralUtils.configAlert)
        }
      })
    }
  }
}
