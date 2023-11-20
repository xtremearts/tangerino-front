import {Component, OnInit} from '@angular/core';
import {FormBuilder, FormGroup, Validators} from "@angular/forms";
import {MatDialog} from "@angular/material/dialog";
import {MatSnackBar} from "@angular/material/snack-bar";
import {UsuarioService} from "../../../services/usuario.service";
import {UsuarioModel} from "../../../models/usuario.model";
import {Router} from "@angular/router";

@Component({
  selector: 'app-cad-usuario',
  templateUrl: './cad-usuario.component.html',
  styleUrls: ['./cad-usuario.component.css']
})
export class CadUsuarioComponent implements OnInit {
  formGroup!: FormGroup;
  filter!: UsuarioModel;

  constructor(
    public fb: FormBuilder,
    public alert: MatSnackBar,
    public service: UsuarioService,
    public router: Router
  ) {
  }

  ngOnInit(): void {
    this.formGroup = this.fb.group({
      nome: [null, Validators.required],
      email: [null, [Validators.required, Validators.email]],
      password: [null, [Validators.required, Validators.min(5)]],
    })
  }

  cadastrarUsuario() {
    this.filter = this.formGroup.value;
    localStorage.removeItem('token');
    if (this.formGroup.valid) {
      this.filter = this.formGroup.value;
      this.service.cadastrar(this.filter).subscribe({
        next: (response) => {
          this.service.usuarioLogado = response;
          this.alert.open('Usuário Cadastrado com Sucesso!')
          this.router.navigate(['/usuario/login'])
        },
        error: (error) => {
          this.alert.open(error.error.message)
        }
      })
    }
  }

  validarErros(nomeCampo: string, parametro: any = null) {
    let formGroupName = this.formGroup.get(nomeCampo);
    if (formGroupName?.hasError('required')) {
      return 'Obrigatório';
    }

    if (formGroupName?.hasError('minlength')) {
      return 'Mínimo de ' + parametro + ' caracteres';
    }

    if (formGroupName?.hasError('email')) {
      return 'Formato de Email Inválido.';
    }

    return null;
  }
}
