import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';
import { RouterModule } from '@angular/router';
import { AdminComponent } from './admin.component';
import { OverviewComponent } from './overview.component';
import { MovieAdminComponent } from './movie-admin/movie-admin.component';
import { OrderAdminComponent } from './order-admin/order-admin.component';
import { MovieEditorComponent } from './movie-editor/movie-editor.component';

@NgModule({
  imports: [
    BrowserModule,
    RouterModule,
    FormsModule
  ],
  declarations: [
    AdminComponent,
    OverviewComponent,
    MovieAdminComponent,
    OrderAdminComponent,
    MovieEditorComponent
  ]
})
export class AdminModule {}
