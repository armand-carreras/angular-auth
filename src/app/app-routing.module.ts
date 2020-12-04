import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomePagesComponent } from './modules/home/pages/home-pages.component';

const routes: Routes =
[
  {path:'home', component:HomePagesComponent},
  {path: '', redirectTo: 'home', pathMatch: 'full' },
  {path:'login', loadChildren:()=> import('./modules/login').then(data => data.LoginModule)},
  {path:'users', loadChildren:()=> import('./modules/users').then(data => data.UsersModule)}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
