import {Component, OnInit} from '@angular/core';
import {MatSnackBar} from "@angular/material/snack-bar";
import {PublicacaoService} from "../../../../services/publicacao.service";
import {FormBuilder, FormGroup, Validators} from "@angular/forms";

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

  constructor(
    public alert: MatSnackBar,
    public service: PublicacaoService,
    public fb: FormBuilder
  ) {
  }

  ngOnInit(): void {
    this.formGroup = this.fb.group({
      imagem: [null, Validators.required],
      descricao: null

    })
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
    };

    this.imagemObrigatorio = false;

  }

  cadastrarUsuario() {
    this.formGroup.get('imagem')?.setValue(this.file);

    const arquivo = new FormData();
    arquivo.append('arquivo', this.formGroup.get('imagem')?.value, 'nomeArquivo');
    arquivo.append('descricao', this.formGroup.get('descricao')?.value)

    if (this.formGroup.valid) {
      this.service.cadastrar(arquivo).subscribe({
        next: () => {
          this.alert.open('Publicação Cadastrado com Sucesso!')
        },
        error: (error) => {
          console.log(error)
          this.alert.open(error)
        }
      })
    }
  }
}
