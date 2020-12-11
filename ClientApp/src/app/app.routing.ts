import { RouterModule } from '@angular/router';
import { Routes } from '@angular/router/src/config';
import { MovieSelectionComponent } from './store/movie-selection/movie-selection.component';


const routes: Routes = [
  {path: 'store', component: MovieSelectionComponent},
  {path: '', component: MovieSelectionComponent}
];

export const RoutingConfig = RouterModule.forRoot(routes);
