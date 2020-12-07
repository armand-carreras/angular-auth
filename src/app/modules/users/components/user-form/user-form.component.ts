import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { AuthService } from 'src/app/shared/services';

@Component({
  selector: 'app-user-form',
  templateUrl: './user-form.component.html',
  styleUrls: ['./user-form.component.scss']
})
export class UserFormComponent implements OnInit {

  formGroup : FormGroup;

  constructor(private fb: FormBuilder,
    private router : Router,
    private auth: AuthService){}

    ngOnInit(): void
    {
      this.buildForm();
    }

  private buildForm(){
    const minPassLength = 4;
    this.formGroup = this.fb.group({
      name:['', [Validators.required, Validators.minLength(minPassLength)]],
      email: ['', [
        Validators.required,
        Validators.email
      ]],
      password: ['', [
        Validators.required,
        Validators.minLength(minPassLength)
      ]],
      confirm_password: ['',[Validators.required]]
    }, {validator : this.mustMatch('password', `confirm_password`)}
    );
  }

  mustMatch(controlName: string, matchingControlName: string) {
    return (formGroup: FormGroup) => {
        const control = formGroup.controls[controlName];
        const matchingControl = formGroup.controls[matchingControlName];

        if (matchingControl.errors && !matchingControl.errors.mustMatch) {
            // return if another validator has already found an error on the matchingControl
            return;
        }

        // set error on matchingControl if validation fails
        if (control.value !== matchingControl.value) {
            matchingControl.setErrors({ mustMatch: true });
        } else {
            matchingControl.setErrors(null);
        }
    }
}

  public getError(controlName: string): string[] {
    let error =  [];
    const control = this.formGroup.get(controlName);
    if (control.touched && control.errors != null) {
     // error = JSON.stringify(control.errors);
      error = [...Object.keys(control.errors)];
    }
    return error;
  }

  register()
  {
    let l_user =
    {
      name: this.formGroup.value.name,
      email: this.formGroup.value.email,
      password: this.formGroup.value.password
    };
    console.log(l_user);
    this.auth.registerUser$(l_user).subscribe(data =>
      {
        this.router.navigate(['login']);
      });
  }
}
