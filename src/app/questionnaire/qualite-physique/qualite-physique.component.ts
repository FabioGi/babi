import { Component, OnInit } from '@angular/core';
import { RouterExtensions } from 'nativescript-angular/router/router-extensions';

@Component({
  selector: 'ns-qualite-physique',
  templateUrl: './qualite-physique.component.html',
  styleUrls: ['./qualite-physique.component.scss']
})
export class QualitePhysiqueComponent implements OnInit {

  constructor(private routerExtensions: RouterExtensions) { }

  ngOnInit() {
  }

}
