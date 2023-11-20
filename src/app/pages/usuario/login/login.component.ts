import {Component, OnInit} from '@angular/core';
import {FormBuilder, FormGroup, Validators} from "@angular/forms";
import {UsuarioService} from "../../../services/usuario.service";
import {LoginFilterModel} from "../../../models/login-filter.model";
import {Router} from "@angular/router";
import {MatSnackBar} from "@angular/material/snack-bar";
import {GeralUtils} from "../../../services/geralUtils";
import {HttpErrorResponse} from "@angular/common/http";

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  formGroup!: FormGroup
  filtro!: LoginFilterModel

  constructor(
    public formBuilder: FormBuilder,
    public service: UsuarioService,
    public router: Router,
    public alert: MatSnackBar
  ) {
  }

  ngOnInit(): void {
    this.formGroup = this.formBuilder.group({
      email: [null, [Validators.required, Validators.email]],
      password: [null, Validators.required]
    })

  }

  logarUsuario() {
    localStorage.removeItem('token');
    if (this.formGroup.valid) {
      this.filtro = this.formGroup.value;
      this.service.autenticarUsuario(this.filtro).subscribe({
        next: (response) => {
          localStorage.setItem("token", response)
          this.router.navigate(['home/'])
          this.alert.open("Login efetuado com sucesso!", 'Fechar', GeralUtils.configAlert);

        },
        error: (error:HttpErrorResponse) => {
          if (error.status == 403) {
            this.alert.open("Usuário ou senha incorretos, verifique email e senha", 'Fechar', GeralUtils.configAlert);
          }
        }
      })
    }
  }

  validarErros(nomeCampo: string) {
    let formGroupName = this.formGroup.get(nomeCampo);
    if (formGroupName?.hasError('required')) {
      return 'Obrigatório';
    }
    return formGroupName?.hasError('email') ? 'Formato de Email Inválido.' : '';
  }
}
