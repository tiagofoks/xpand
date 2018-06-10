import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { SideMenuPage } from './../sideMenu/sideMenu';

/**
 * Generated class for the RegisterSucessPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-register-sucess',
  templateUrl: 'register-sucess.html',
})
export class RegisterSucessPage {

  constructor(public navCtrl: NavController, public navParams: NavParams) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad RegisterSucessPage');
  }

  toHome($event) {
    this.navCtrl.setRoot(SideMenuPage);
  }


}
