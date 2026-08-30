import { Routes } from '@angular/router';
import { MasterPage } from './pages/master/master.page';
import { DetailsPage } from './pages/details/details.page';

export const routes: Routes = [
  { path: 'master', component: MasterPage },
  { path: 'details/:id', component: DetailsPage },
  { path: '', redirectTo: '/master', pathMatch: 'full' }
];
