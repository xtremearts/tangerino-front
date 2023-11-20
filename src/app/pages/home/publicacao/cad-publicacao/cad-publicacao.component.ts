import {Component, OnInit} from '@angular/core';
import {MatSnackBar} from "@angular/material/snack-bar";
import {PublicacaoService} from "../../../../services/publicacao.service";
import {FormBuilder, FormGroup, Validators} from "@angular/forms";
import {GeralUtils} from "../../../../services/geralUtils";
import {MatDialog} from "@angular/material/dialog";
import {PublicacaoModel} from "../../../../models/publicacao.model";
import {Router} from "@angular/router";

@Component({
  selector: 'app-cad-post',
  templateUrl: './cad-publicacao.component.html',
  styleUrls: ['./cad-pulicacao.component.css']
})
export class CadPublicacaoComponent implements OnInit {
  file: File | any;
  imagemPreview: any;
  imagemObrigatorio: any;
  formGroup!: FormGroup;
  formControlNameImagem: any;

  constructor(
    public alert: MatSnackBar,
    public service: PublicacaoService,
    public fb: FormBuilder,
    public modal: MatDialog,
    public router: Router
  ) {
  }

  ngOnInit(): void {
    this.formGroup = this.fb.group({
      imagem: [null, Validators.required],
      descricao: null
    })

    this.formControlNameImagem = this.formGroup.get('imagem');
  }

  adicionarImagem($event: Event) {
    // @ts-ignore
    this.file = $event.target.files[0];

    if (this.file.type != 'image/png' && this.file.type != 'image/jpeg') {
      this.file = null;
      this.alert.open('Formato de imagem permitidos: jpg ou png.');
      return
    }

    const reader = new FileReader();
    reader.readAsDataURL(this.file);

    reader.onload = () => {
      this.imagemPreview = reader.result;
      console.log(reader.result)
    };

    this.formControlNameImagem.setValue(this.file);
    this.imagemObrigatorio = false;


  }

  cadastrarUsuario() {
    if (this.formControlNameImagem.hasError('required')) this.imagemObrigatorio = true;

    if (this.formGroup.valid) {
      const arquivo = new FormData();
      arquivo.append('arquivo', this.formControlNameImagem?.value);
      arquivo.append('descricao', this.formGroup.get('descricao')?.value)

      this.service.cadastrar(arquivo).subscribe({
        next: () => {
          this.alert.open('Publicação Cadastrada com Sucesso!','Fechar', GeralUtils.configAlert)
          this.service.carregarPublicacoes();
          this.modal.closeAll();
        },
        error: (error) => {
          this.alert.open(error.error.message, 'Fechar', GeralUtils.configAlert)
        }
      })
    }
  }


}
