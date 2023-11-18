import {Component, OnInit} from '@angular/core';
import {FormBuilder, FormGroup, Validators} from "@angular/forms";
import {UsuarioService} from "../../../services/usuario.service";
import {LoginFilterModel} from "../../../models/login-filter.model";
import {Router} from "@angular/router";

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
        },
        error: (error) => {
          console.log(error)
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
