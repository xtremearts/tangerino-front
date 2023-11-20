import { Component, OnInit } from '@angular/core';
import {PublicacaoService} from "../../../services/publicacao.service";
import {GeralUtils} from "../../../services/geralUtils";
import {FormGroup} from "@angular/forms";
import {ComentarioService} from "../../../services/comentario.service";
import {MatSnackBar} from "@angular/material/snack-bar";

@Component({
  selector: 'app-list-comentarios',
  templateUrl: './list-comentarios.component.html',
  styleUrls: ['./list-comentarios.component.css']
})
export class ListComentariosComponent implements OnInit {
  base64Imagem = GeralUtils.BASE64_IMAGEM;
  formGroup!: FormGroup | any;

  constructor(
    public publicacaoService: PublicacaoService,
    public comentarioService: ComentarioService,
    public alert: MatSnackBar

  ) { }

  ngOnInit(): void {
  }

  deletarComentario(id: number, index: number) {
    this.comentarioService.deletar(id).subscribe({
      next: () => {
        this.alert.open("Comentário excluído com sucesso", 'Fechar', GeralUtils.configAlert)
        delete this.publicacaoService.objPublicacaoAtiva[0].comentarios[index];

      },
      error: (error) => {
        this.alert.open(error.error.message, 'Fechar', GeralUtils.configAlert)
      }
    })
  }

}
