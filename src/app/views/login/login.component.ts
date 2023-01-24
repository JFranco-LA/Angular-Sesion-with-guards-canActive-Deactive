import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators, FormControl } from '@angular/forms';
import { Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { ShareDataService } from 'src/app/services/share-data.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {

  textLogin: string = 'Volver al Inicio';
  redirect: string = '/inicio';
  sesionUsuario: FormGroup;

  usuario = {
    username: 'AD',
    password: '123456'
  }

  constructor(private fb: FormBuilder, private toastr: ToastrService, private loginService: ShareDataService, private router: Router) {
    this.sesionUsuario = fb.group({
      username: ['', [Validators.required]],
      password: ['', Validators.required],
    });
    console.log('ESTADO DE SESION EN LOGIN: ',this.loginService.getData());
  }

  loginAccount() {
    const { username, password } = this.sesionUsuario.value;
    // console.log(username, password);

    this.loginService.loginWithUserAndPassword(username, password);
    if(this.loginService.getData()){
      this.toastr.success('iniciando sesión', 'Welcome');
    } else {
      this.toastr.error('Credenciales incorrectas', 'Error en sesion')
    }

    setTimeout(() => { this.sesionUsuario.reset() }, 400);
    if(this.loginService.getData()){
      this.router.navigate(['/home']);
    }
  }
  

  get user() {
    return this.sesionUsuario.get('username') as FormControl;
  }

  get pass() {
    return this.sesionUsuario.get('password') as FormControl;
  }

}
