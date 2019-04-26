import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import{ Storage } from '@ionic/storage';

@IonicPage()
@Component({
  selector: 'page-sign-up',
  templateUrl: 'sign-up.html',
})
export class SignUpPage {
  username:String;
  password:String;
  constructor(public navCtrl: NavController, public navParams: NavParams, private storage: Storage) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad SignUpPage');
  }
  Create()
  {
    this.navCtrl.push('PersonalDetailsPage');
    this.storage.set("user",this.username);
    this.storage.set("pass",this.password);
  }

}
