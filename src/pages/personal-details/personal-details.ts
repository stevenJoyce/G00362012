import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import{ Storage } from '@ionic/storage';

@IonicPage()
@Component({
  selector: 'page-personal-details',
  templateUrl: 'personal-details.html',
})
export class PersonalDetailsPage {
  choice:String;
  constructor(public navCtrl: NavController, public navParams: NavParams, private storage: Storage) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad PersonalDetailsPage');
  }
  save(){
    this.storage.set("choice",this.choice);
    console.log(this.choice);
  }
  form(){
    this.navCtrl.push('PersonalInterestsPage');
  }
}
