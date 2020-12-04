import { Input, NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatButtonModule } from '@angular/material/button';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';

const material=
[
  MatButtonModule,
  MatFormFieldModule,
  MatInputModule
]


@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    ...material
  ],
  exports:[...material]
})
export class MaterialModule { }
