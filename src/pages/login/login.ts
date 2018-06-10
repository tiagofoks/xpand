import { Component } from '@angular/core';
import {IonicPage, NavController } from 'ionic-angular';
import { RegisterPage } from '../register/register';
import { SideMenuPage } from '../sideMenu/sideMenu';

interface ICliente {
  cpf?:string,  nome?:string, produto?:string, negocio?:string, senha?:string, data?:string
}

@IonicPage()
@Component({
  selector: 'page-login',
  templateUrl: 'login.html'
})
export class LoginPage {

  private cliente: ICliente;

  constructor(public navCtrl: NavController) {
    this.cliente = {
      cpf:'45667474840',
      nome:'Sérgio Paulo',
      produto:'Café',
      negocio:'Cafeteria',
      senha:'123456',
      data:'05/02/1985'
    };
  }

  public clickRegister(event) {
      this.navCtrl.push(RegisterPage, {cliente: this.cliente});
  }

  public clickHome(event) {
    this.navCtrl.push(SideMenuPage, {cliente: this.cliente});
  }

}
