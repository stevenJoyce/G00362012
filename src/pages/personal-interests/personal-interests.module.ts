import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { PersonalInterestsPage } from './personal-interests';

@NgModule({
  declarations: [
    PersonalInterestsPage,
  ],
  imports: [
    IonicPageModule.forChild(PersonalInterestsPage),
  ],
})
export class PersonalInterestsPageModule {}
