import { Routes } from '@angular/router';
import { MainContentComponent } from './main-content/main-content.component';
import { ImpressumComponent } from './info/impressum/impressum.component';
import { PrivacyPolicyComponent } from './info/privacy-policy/privacy-policy.component';


export const routes: Routes = [
  { path: '', component: MainContentComponent },
  { path: 'impressum', component:  ImpressumComponent},
  { path: 'privacy-policy', component: PrivacyPolicyComponent},

];


