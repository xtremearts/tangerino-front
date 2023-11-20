import {Component, OnInit} from '@angular/core';
import {FormBuilder, FormGroup, Validators} from "@angular/forms";
import {GeralUtils} from "../../../services/geralUtils";
import {PublicacaoService} from "../../../services/publicacao.service";
import {MatSnackBar} from "@angular/material/snack-bar";
import {ComentarioService} from "../../../services/comentario.service";
import {ComentarioFilterModel} from "../../../models/comentario-filter.model";
import {PublicacaoModel, PublicacaoRetornoModel} from "../../../models/publicacao.model";
import {MatDialog} from "@angular/material/dialog";
import {ListComentariosComponent} from "../list-comentarios/list-comentarios.component";

@Component({
  selector: 'app-linha-tempo',
  templateUrl: './linha-tempo.component.html',
  styleUrls: ['./linha-tempo.component.css']
})
export class LinhaTempoComponent implements OnInit {
  formGroup!: FormGroup;
  base64Imagem = GeralUtils.BASE64_IMAGEM;
  filter!: ComentarioFilterModel;


  constructor(
    public fb: FormBuilder,
    public publicacaoService: PublicacaoService,
    public comentarioService: ComentarioService,
    public alert: MatSnackBar,
    public modal: MatDialog
  ) {
  }

  ngOnInit(): void {
    this.formGroup = this.fb.group({
      comentario: [null, Validators.required],
      publicacao: [null, Validators.required]
    })

    this.publicacaoService.carregarPublicacoes()
  }


  publicar(publicacao: PublicacaoModel) {
    this.formGroup.get('publicacao')?.setValue(publicacao);

    this.filter = this.formGroup.value;
    if (this.formGroup.valid) {
      this.comentarioService.cadastrar(this.filter).subscribe({
        next: () => {
          this.publicacaoService.carregarPublicacoes()
          this.formGroup.get('comentario')?.reset();
          this.alert.open('Comentário salvo com sucesso', 'Fechar', GeralUtils.configAlert)
        },
        error: (error) => {
          this.alert.open(error, 'Fechar', GeralUtils.configAlert)
        }
      })
    }
  }

  abrirComentarios(publicacao: PublicacaoRetornoModel) {
    this.publicacaoService.objPublicacaoAtiva = [publicacao];
    this.modal.open(ListComentariosComponent, {
      width: '80%',
    })
  }

  deletarPublicacao(id: number) {
    this.publicacaoService.deletar(id).subscribe({
      next: () => {
        this.alert.open("Publicação excluída com sucesso", 'Fechar', GeralUtils.configAlert)
        this.publicacaoService.carregarPublicacoes()

      },
      error: (error) => {
        this.alert.open(error.error.message, 'Fechar', GeralUtils.configAlert)
      }
    })
  }



}
