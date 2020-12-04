import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RegisterComponent } from './pages/register/register.component';
import { UserComponent } from './pages/user/user.component';
import { UsersComponent } from './pages/users/users.component';
import { UserDetailComponent } from './components/user-detail/user-detail.component';
import { UserFormComponent } from './components/user-form/user-form.component';
import { UserListComponent } from './components/user-list/user-list.component';
import { UsersRoutingModule } from './users-routing.module';



@NgModule({
  declarations: [RegisterComponent, UserComponent, UsersComponent, UserDetailComponent, UserFormComponent, UserListComponent],
  imports: [
    CommonModule, UsersRoutingModule
  ],
  exports:[RegisterComponent]
})
export class UsersModule { }
