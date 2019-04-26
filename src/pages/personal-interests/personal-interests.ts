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
  no1:boolean = true;
  no2:boolean = true;
  no3:boolean = true;
  no4:boolean = true;
  no5:boolean = true;
  no6:boolean = true;
  question1:boolean = true;
  question2:boolean = true;
  question3:boolean = true;
  question4:boolean = true;
  question5:boolean = true;
  question6:boolean = true;
  last:boolean = true;
  constructor(public navCtrl: NavController, public navParams: NavParams, private storage:Storage) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad PersonalInterestsPage');
    this.question1 = false;
    this.no1 = false;
  }
  q1(){
    this.storage.set("sports",this.sports);
    this.question2 = false;
    this.question1 = true;
    this.no2 = false;
    this.no1 = true;
  }
  q2(){
    this.storage.set("sportList",this.sport);
    this.question2 = true;
    this.question3 = false;
    this.no3 = false;
    this.no2 = true;
  }
  q3(){
    this.storage.set("bike",this.ride);
    this.question3 = false;
    this.question4 = true;
    this.no4 = false;
    this.no3 = true;
  }

  q4(){
    this.storage.set("gym",this.gym);
    this.question4 = false;
    this.question5 = true;
    this.no5 = false;
    this.no4 = true;
  }

  q5(){
    this.storage.set("cinema",this.cinema);
    this.question5 = false;
    this.question6 = true;
    this.no6 = false;
    this.no5 = true;
  }
    
q6(){
    this.storage.set("beach",this.beach);
    this.question6 = false;
    this.last = true;
    this.no6 = true;
  }
  finish(){
    this.navCtrl.push('mapPage');
  }

}
