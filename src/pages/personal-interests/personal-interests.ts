import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import{ Storage } from '@ionic/storage';

@IonicPage()
@Component({
  selector: 'page-personal-interests',
  templateUrl: 'personal-interests.html',
})
export class PersonalInterestsPage {
  sports:string;
  sport:string;
  ride:boolean;
  gym:boolean;
  cinema:boolean;
  beach:boolean;

  constructor(public navCtrl: NavController, public navParams: NavParams, private storage:Storage) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad PersonalInterestsPage');
  }

  finish(){
    this.storage.set("sports",this.sports);
    this.storage.set("sportList",this.sport);
    this.storage.set("bike",this.ride);
    this.storage.set("gym",this.gym);
    this.storage.set("cinema",this.cinema);
    this.storage.set("beach",this.beach);
    this.navCtrl.push('MapPage');
  }

}
