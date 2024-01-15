import { Route } from '@angular/router';
import { HomeComponent } from './routes/home/home.component';
import { DetailsComponent } from './routes/details/details.component';

export const appRoutes: Route[] = [
  {
    path: '',
    component: HomeComponent
  },
  {
    path: 'details/:id',
    component: DetailsComponent
  }
];
