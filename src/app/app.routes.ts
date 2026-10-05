import { Routes } from '@angular/router';
import { LegalNotice } from './legal-notice/legal-notice';
import { MainContent } from './main-content/main-content';
import { PrivacyPolicy } from './privacy-policy/privacy-policy';

export const routes: Routes = [
  { path: '', component: MainContent },
  { path: 'impressum', component: LegalNotice },
  { path: 'datenschutz', component: PrivacyPolicy },
  { path: '**', redirectTo: '' },
];
