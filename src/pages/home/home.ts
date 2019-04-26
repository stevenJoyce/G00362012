import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {

  constructor(public navCtrl: NavController) {

  }

  signIn()
  {
    this.navCtrl.push('SignInPage');
  }//signIn
  signUp()
  {
    this.navCtrl.push('SignUpPage');
  }//SignUp
}
