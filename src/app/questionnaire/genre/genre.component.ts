import { Component, OnInit } from '@angular/core';
import { RouterExtensions } from "nativescript-angular/router";

@Component({
  selector: 'ns-genre',
  templateUrl: './genre.component.html',
  styleUrls: ['./genre.component.scss']
})
export class GenreComponent implements OnInit {

  constructor(private routerExtensions: RouterExtensions) { }

  ngOnInit() {
  }

}
