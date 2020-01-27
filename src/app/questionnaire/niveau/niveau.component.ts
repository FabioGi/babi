import { Component, OnInit } from '@angular/core';
import { Slider } from "tns-core-modules/ui/slider";


@Component({
  selector: 'ns-niveau',
  templateUrl: './niveau.component.html',
  styleUrls: ['./niveau.component.scss']
})
export class NiveauComponent implements OnInit {

  onSliderValueChange(args) {
    let slider = <Slider>args.object;
    console.log(`Slider new value ${args.value}`);
  }

  constructor() { }

  ngOnInit() {
  }

}
