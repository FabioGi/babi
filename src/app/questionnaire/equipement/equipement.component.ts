import { Component, OnInit } from '@angular/core';
// import { CheckBox } from 'nativescript-checkbox';
import {registerElement} from 'nativescript-angular/element-registry';
registerElement('Checkbox', () => require('nativescript-checkbox').CheckBox)


@Component({
  selector: 'ns-equipement',
  templateUrl: './equipement.component.html',
  styleUrls: ['./equipement.component.scss']
})
export class EquipementComponent implements OnInit {
  public checkProp: boolean = false;

  constructor() { }

  ngOnInit() {
  }

}
