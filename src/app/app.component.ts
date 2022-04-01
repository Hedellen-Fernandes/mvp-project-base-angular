import { Component } from '@angular/core';
import { InputTypeInterface } from './ui/inputs/models/input-type.interface';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'mvp-project-base';
  inputType = InputTypeInterface;
}
