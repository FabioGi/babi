import { NgModule } from "@angular/core";
import { Routes } from "@angular/router";
import { NativeScriptRouterModule } from "nativescript-angular/router";

import { QuestionnaireComponent } from "./questionnaire.component";
import { ObjectifComponent } from "./objectif/objectif.component";
import { GenreComponent } from "./genre/genre.component";
import { QualitePhysiqueComponent } from "./qualite-physique/qualite-physique.component";
import { ProblemeSanteV1Component } from "./probleme-sante-v1/probleme-sante-v1.component";
import { ProblemeSanteV2Component } from "./probleme-sante-v2/probleme-sante-v2.component";
import { NiveauComponent } from "./niveau/niveau.component";
import { PathologieHommeFaceComponent } from "./pathologie-homme-face/pathologie-homme-face.component";
import { PathologieHommeDosComponent } from "./pathologie-homme-dos/pathologie-homme-dos.component";
import { PathologieFemmeDosComponent } from "./pathologie-femme-dos/pathologie-femme-dos.component";
import { PathologieFemmeFaceComponent } from "./pathologie-femme-face/pathologie-femme-face.component";
import { EquipementComponent } from "./equipement/equipement.component";
import { PathologieComponent } from "./pathologie/pathologie.component";

const routes: Routes = [
    { path: "", component: QuestionnaireComponent },
    { path: "objectif", component: ObjectifComponent },
    { path: "genre", component: GenreComponent },
    { path: "qualite", component: QualitePhysiqueComponent },
    { path: "autre", component: ProblemeSanteV1Component },
    { path: "autre2", component: ProblemeSanteV2Component },
    { path: "niveau", component: NiveauComponent },
    { path: "senior", component: NiveauComponent },
    { path: "patologie", component: PathologieComponent },
    { path: "patologie-homme-face", component: PathologieHommeFaceComponent },
    { path: "patologie-homme-dos", component: PathologieHommeDosComponent },
    { path: "patologie-femme-dos", component: PathologieFemmeDosComponent },
    { path: "patologie-femme-face", component: PathologieFemmeFaceComponent },
    { path: "equipement", component: EquipementComponent }
];

@NgModule({
    imports: [NativeScriptRouterModule.forChild(routes)],
    exports: [NativeScriptRouterModule]
})
export class QuestionnaireRoutingModule { }
