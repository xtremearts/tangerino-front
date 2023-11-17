import {Component, OnInit} from '@angular/core';
import {FormBuilder, FormGroup, Validators} from "@angular/forms";
import {UsuarioService} from "../../../services/usuario.service";
import {LoginFilterModel} from "../../../models/login-filter.model";

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
    public service: UsuarioService
  ) {
  }

  ngOnInit(): void {
    this.formGroup = this.formBuilder.group({
      email: [null, Validators.required],
      password: [null, Validators.required]
    })

  }

  logarUsuario() {
    if (this.formGroup.valid) {
      this.filtro = this.formGroup.value;
      this.service.autenticarUsuario(this.filtro).subscribe({
        next: (response) => {
          localStorage.setItem("token", response)
        },
        error: (error) => {
          console.log(error)
        }
      })
    }

  }
}
