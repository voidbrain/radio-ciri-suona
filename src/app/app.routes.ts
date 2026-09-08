import { Routes } from '@angular/router';
import { MasterPage } from './pages/master/master.page';
import { DetailsPage } from './pages/details/details.page';

export const routes: Routes = [
  { path: 'details/:id', component: DetailsPage },
  { path: '', component: MasterPage }
];
