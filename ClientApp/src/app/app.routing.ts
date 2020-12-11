import { RouterModule } from '@angular/router';
import { Routes } from '@angular/router/src/config';
import { MovieDetailComponent } from './structure/movie-detail/movie-detail.component';
import { MovieTableComponent } from './structure/movie-table/movie-table.component';

const routes: Routes = [
  {path: 'table', component: MovieTableComponent},
  {path: 'detail/:id', component: MovieDetailComponent},
  {path: 'detail', component: MovieDetailComponent},
  {path: '', component: MovieTableComponent}
];

export const RoutingConfig = RouterModule.forRoot(routes);
