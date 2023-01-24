import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { ShareDataService } from 'src/app/services/share-data.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent {
  textComponent: string = 'Logout'
  nombre: string = '';
  usuario: string = '';

  constructor(private router: Router, private loginService: ShareDataService) {
    console.log('ESTADO DE SESION EN EL HOME: ', this.loginService.getData());
    this.usuario = loginService.getUserName();
    this.nombre = loginService.getName();
  }

  logout() {
    this.router.navigate(['/inicio']);
  }
}
