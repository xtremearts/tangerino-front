import {Component, OnInit} from '@angular/core';
import {FormBuilder, FormGroup, Validators} from "@angular/forms";
import {GeralUtils} from "../../../services/geralUtils";
import {PublicacaoService} from "../../../services/publicacao.service";
import {MatSnackBar} from "@angular/material/snack-bar";
import {ComentarioService} from "../../../services/comentario.service";
import {ComentarioFilterModel} from "../../../models/comentario-filter.model";
import {ComentarioModel} from "../../../models/comentario.model";
import {PublicacaoModel} from "../../../models/publicacao.model";

@Component({
  selector: 'app-linha-tempo',
  templateUrl: './linha-tempo.component.html',
  styleUrls: ['./linha-tempo.component.css']
})
export class LinhaTempoComponent implements OnInit {
  formGroup!: FormGroup;
  base64Imagem = GeralUtils.BASE64_IMAGEM;
  filter!: ComentarioFilterModel;
  objComentariosAtivos?: ComentarioModel[];

  constructor(
    public fb: FormBuilder,
    public publicacaoService: PublicacaoService,
    public comentarioService: ComentarioService,
    public alert: MatSnackBar,
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
        next: (response) => {
          this.objComentariosAtivos = response
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

  obterComentariosPublicacao(id: number) {
    this.comentarioService.obterPorPublicacao(id).subscribe({
      next: (response) => {
        this.objComentariosAtivos = response
      },
      error: (error) => {
        this.alert.open(error, 'Fechar', GeralUtils.configAlert)
      }
    })
  }


  abrirComentarios(comentarios: ComentarioModel[]) {
    this.objComentariosAtivos = comentarios;

  }
}
