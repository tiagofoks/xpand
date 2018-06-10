import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { RegisterSucessPage } from './../register-sucess/register-sucess';

/**
 * Generated class for the RegisterPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-register',
  templateUrl: 'register.html',
})
export class RegisterPage {

  private cliente:any;

  constructor(public navCtrl: NavController, public navParams: NavParams) {
    this.cliente = this.navParams.data.cliente;
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad RegisterPage');
  }

  openSucess(event) {
    this.navCtrl.push(RegisterSucessPage, {cliente: this.cliente});
  }

}
