import { decimalDigest } from '@angular/compiler/src/i18n/digest';
import { Component, ElementRef, Input, OnInit, ViewChild } from '@angular/core';
import { InputTypeInterface } from './models/input-type.interface';

@Component({
  selector: 'inputs',
  templateUrl: './inputs.component.html',
  styleUrls: ['./inputs.component.scss']
})
export class InputsComponent implements OnInit {

  @Input() inputType: InputTypeInterface = InputTypeInterface.text;
  @Input() inputDisabled: Boolean = false;
  @Input() isValid: Boolean = true;
  @Input() inputPlaceholder: String = '';
  @Input() inputLabel: String = '';
  @Input() inputId: String = '';

  constructor() { }

  ngOnInit(): void {
  }
}
