import { getLocaleDayNames } from '@angular/common';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ShareDataService {

  private isLogin: boolean = false;


  user_name: string = 'AD'
  name: string = 'ADMIN'
  private password: string = '123456'


  constructor() { }

  loginWithUserAndPassword(user: string, password: string) {
    if (user == this.user_name && password == this.password) {
      this.setData(true);
    } else {    
      this.setData(false);
    }
  }

  getData() {
    return this.isLogin;
  }

  setData(sesion: boolean) {
    this.isLogin = sesion;
  }

  getUserName() {
    return this.user_name;
  }

  getName() {
    return this.name;
  }
}
