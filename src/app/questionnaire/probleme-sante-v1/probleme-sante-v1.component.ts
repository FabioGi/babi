import { Component, OnInit } from '@angular/core';
import { alert,action} from "tns-core-modules/ui/dialogs";
import { RouterExtensions } from 'nativescript-angular/router';
import { Router } from '@angular/router';


@Component({
  selector: 'ns-probleme-sante-v1',
  templateUrl: './probleme-sante-v1.component.html',
  styleUrls: ['./probleme-sante-v1.component.scss']
})
export class ProblemeSanteV1Component implements OnInit {

  constructor(private routerExtensions: RouterExtensions,
    private router: Router) { }

  ngOnInit() {
  }
  action() {
    action({
        message: "Reevaluer regulierement vos aptitudes physiques avec votre medecin",
        actions: ["Continuer"],
    }).then(() => {
        console.log("The user closed the alert.");
        this.router.navigate(["$questionnaire/autre2"]);
    });
}

}
