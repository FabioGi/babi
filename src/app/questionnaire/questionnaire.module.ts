import { NgModule } from '@angular/core';
import { QuestionnaireComponent } from './questionnaire.component';
import { ObjectifComponent } from './objectif/objectif.component';
import { QuestionnaireRoutingModule } from './questionnaire-routing.module';
import { NativeScriptCommonModule } from 'nativescript-angular/common';
import { NativeScriptUISideDrawerModule } from 'nativescript-ui-sidedrawer/angular/side-drawer-directives';
// import { NativeScriptCommonModule } from "nativescript-angular/common";
// import { NativeScriptUISideDrawerModule } from "nativescript-ui-sidedrawer/angular";
 import { NativeScriptUIListViewModule } from "nativescript-ui-listview/angular";
// import { NativeScriptUICalendarModule } from "nativescript-ui-calendar/angular";
// import { NativeScriptUIChartModule } from "nativescript-ui-chart/angular";
 import { NativeScriptUIDataFormModule } from "nativescript-ui-dataform/angular";
// import { NativeScriptUIAutoCompleteTextViewModule } from "nativescript-ui-autocomplete/angular";
// import { NativeScriptUIGaugeModule } from "nativescript-ui-gauge/angular";
import { NativeScriptFormsModule } from "nativescript-angular/forms";
import { GenreComponent } from './genre/genre.component';
import { QualitePhysiqueComponent } from './qualite-physique/qualite-physique.component';
import { ProblemeSanteV1Component } from './probleme-sante-v1/probleme-sante-v1.component';
import { ProblemeSanteV2Component } from './probleme-sante-v2/probleme-sante-v2.component';
import { NiveauComponent } from './niveau/niveau.component';
import { NiveauSeniorComponent } from './niveau-senior/niveau-senior.component';
import { PathologieComponent } from './pathologie/pathologie.component';
import { PathologieHommeFaceComponent } from './pathologie-homme-face/pathologie-homme-face.component';
import { PathologieHommeDosComponent } from './pathologie-homme-dos/pathologie-homme-dos.component';
import { PathologieFemmeDosComponent } from './pathologie-femme-dos/pathologie-femme-dos.component';
import { PathologieFemmeFaceComponent } from './pathologie-femme-face/pathologie-femme-face.component';
import { EquipementComponent } from './equipement/equipement.component';

@NgModule({
  imports: [
    NativeScriptCommonModule,
    QuestionnaireRoutingModule,
    NativeScriptUISideDrawerModule,
    NativeScriptUIListViewModule,
    // NativeScriptUICalendarModule,
   // NativeScriptUIChartModule,
    NativeScriptUIDataFormModule,
    // NativeScriptUIAutoCompleteTextViewModule,
   // NativeScriptUIGaugeModule,
    NativeScriptCommonModule,
    NativeScriptFormsModule,
    // NgShadowModule
  ],
  declarations: [QuestionnaireComponent,ObjectifComponent,
     GenreComponent, QualitePhysiqueComponent,
     ProblemeSanteV1Component, ProblemeSanteV2Component,
     NiveauComponent, NiveauSeniorComponent, PathologieComponent,
     PathologieHommeFaceComponent, PathologieHommeDosComponent,
     PathologieFemmeDosComponent, PathologieFemmeFaceComponent,
     EquipementComponent]
})
export class QuestionnaireModule { }