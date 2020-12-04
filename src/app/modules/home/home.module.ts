import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HomeComponent } from './components/home.component';
import { HomePagesComponent } from './pages/home-pages.component';
import { RouterModule } from '@angular/router';
import { MaterialModule } from '../../shared/material';



@NgModule({
  declarations: [HomeComponent, HomePagesComponent],
  imports: [
    CommonModule,
    RouterModule,
    MaterialModule
  ],
  exports: [HomePagesComponent]
})
export class HomeModule { }
