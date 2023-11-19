import {Component, OnInit} from '@angular/core';
import {FormBuilder, FormGroup} from "@angular/forms";
import {GeralUtils} from "../../../services/geralUtils";
import {PublicacaoService} from "../../../services/publicacao.service";
import {PublicacaoModel, PublicacaoRetornoModel} from "../../../models/publicacao.model";
import {MatSnackBar} from "@angular/material/snack-bar";

@Component({
  selector: 'app-linha-tempo',
  templateUrl: './linha-tempo.component.html',
  styleUrls: ['./linha-tempo.component.css']
})
export class LinhaTempoComponent implements OnInit {
  formGroup!: FormGroup;
  base64Imagem = GeralUtils.BASE64_IMAGEM;

  constructor(
    public fb: FormBuilder,
    public service: PublicacaoService,
    public alert: MatSnackBar,
  ) {
  }

  ngOnInit(): void {
    this.formGroup = this.fb.group({
      comentario: null,
      idPublicacao: null
    })

    this.service.carregarPublicacoes()
  }


  publicar(number: number) {

  }
}
