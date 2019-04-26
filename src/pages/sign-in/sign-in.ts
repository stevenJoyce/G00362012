import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import{ Storage } from '@ionic/storage';

@IonicPage()
@Component({
  selector: 'page-sign-in',
  templateUrl: 'sign-in.html',
})
export class SignInPage {
  username:String;
  password:String;
  constructor(public navCtrl: NavController, public navParams: NavParams, private storage: Storage) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad SignInPage');
  }
  LogIn()
  {
    this.navCtrl.push('PersonalDetailsPage');
  }

  ionViewWillEnter(){
    this.storage.get("user").then((val) => {
      this.username = val;
    }).catch((err) => {
      console.log(err);
    });
      this.storage.get("pass").then((val) => {
        this.password = val;
      }).catch((err) => {
        console.log(err);
      });
  }
}
