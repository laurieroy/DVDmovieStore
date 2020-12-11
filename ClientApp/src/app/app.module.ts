import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { ModelModule } from './models/model.module';
import { MovieTableComponent } from './structure/movie-table/movie-table.component';
import { CategoryFilterComponent } from './structure/movie-table/categoryFilter.component';
import { MovieDetailComponent } from './structure/movie-detail/movie-detail.component';

@NgModule({
  declarations: [
    AppComponent,
    CategoryFilterComponent,
    MovieTableComponent,
    MovieDetailComponent,
  ],
  imports: [
    BrowserModule.withServerTransition({ appId: 'ng-cli-universal' }),
    HttpClientModule,
    FormsModule,
    ModelModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
