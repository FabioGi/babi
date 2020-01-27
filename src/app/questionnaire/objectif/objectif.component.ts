// import { Component, OnInit } from '@angular/core';
import { Image } from 'tns-core-modules/ui/image';
import { Component, OnInit, ElementRef, ViewChild } from "@angular/core";
import { ScrollView, ScrollEventData } from 'tns-core-modules/ui/scroll-view';
 //import { screen } from 'platform';
import { View } from 'tns-core-modules/ui/core/view';
// import { Page } from "ui/page";
import { EventData } from "tns-core-modules/data/observable";
import { topmost } from "tns-core-modules/ui/frame";
import { isIOS } from "tns-core-modules/platform";
import { RouterExtensions } from 'nativescript-angular/router';

@Component({
  selector: 'ns-objectif',
  templateUrl: './objectif.component.html',
  styleUrls: ['./objectif.component.scss']
})
export class ObjectifComponent implements OnInit {

  constructor(private routerExtensions: RouterExtensions) { }

  ngOnInit() {
  }

}
