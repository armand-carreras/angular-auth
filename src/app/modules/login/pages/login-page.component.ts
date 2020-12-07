import { Component, Input, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { Router } from '@angular/router';
import { AuthService } from '../../../shared/services';

@Component({
  selector: 'app-login-page',
  template: `<app-login-form [formGroup]='formGroup'
                (addItem)='logUser($event)'>
                </app-login-form>`,
})
export class LoginPageComponent implements OnInit {

  formGroup:FormGroup
  constructor(private fb:FormBuilder,
              private auth:AuthService,
              private router:Router) { }

  createForm():FormGroup
  {
    return this.fb.group({
      id:'',
      email:'',
      password:''
    });
  }
  ngOnInit(): void
  {
    this.formGroup = this.createForm();
  }
  logUser(user)
  {
    this.auth.loginUser$(user).subscribe(data =>
      {
        this.auth.setToken(data.token);
        this.router.navigate([`users/profile/${data.id}`]);
      });
  }
}
