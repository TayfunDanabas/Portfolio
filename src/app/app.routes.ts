import { Routes } from '@angular/router';
import { LegalNotice } from './legal-notice/legal-notice';
import { MainContent } from './main-content/main-content';

export const routes: Routes = [
  { path: '', component: MainContent },
  { path: 'impressum', component: LegalNotice },
];
