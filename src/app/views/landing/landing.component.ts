import { Component } from '@angular/core';
import { ShareDataService } from 'src/app/services/share-data.service';

@Component({
  selector: 'app-landing',
  templateUrl: './landing.component.html',
  styleUrls: ['./landing.component.css']
})
export class LandingComponent {

  constructor(private loginService: ShareDataService){
    loginService.setData(false);
    console.log('ESTADO SESION EN LA LANDING PAGE: ', loginService.getData());
  }

  textLogin: string = 'Login';
  redirect: string = '/login';

}
