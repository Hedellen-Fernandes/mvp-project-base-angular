import { Component, Input, OnInit } from '@angular/core';
import { InputTypeInterface } from './models/input-type.interface';

@Component({
  selector: 'app-inputs',
  templateUrl: './inputs.component.html',
  styleUrls: ['./inputs.component.scss']
})
export class InputsComponent implements OnInit {

  @Input() typeInput: InputTypeInterface = InputTypeInterface.text;
  @Input() disabledInput: Boolean = false;
  @Input() isValid: Boolean = true;
  @Input() placeholderInput: String = '';
  @Input() labelInput: String = '';
  @Input() idInput: String = '';

  constructor() { }

  ngOnInit(): void {
  }

}
