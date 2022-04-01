import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { InputsComponent } from './inputs/inputs.component';
import { ButtonsComponent } from './buttons/buttons.component';



@NgModule({
  declarations: [
    InputsComponent,
    ButtonsComponent
  ],
  imports: [
    CommonModule
  ],
  exports: [
    InputsComponent,
    ButtonsComponent
  ]
})
export class UiModule { }
