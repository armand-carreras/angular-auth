import { HttpClient } from '@angular/common/http';
import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-login-form',
  templateUrl: './login-form.component.html',
  styleUrls: ['./login-form.component.scss']
})
export class LoginFormComponent implements OnInit {

  @Input() formGroup:FormGroup;
  @Output() addItem = new EventEmitter();
  constructor(private http:HttpClient) { }

  ngOnInit(): void {
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

  onSubmit()
  {
    console.log(this.formGroup.value);
    this.addItem.emit(this.formGroup.value);
  }


}
