import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {FilterPageComponent} from './filter-page.component';
import {FilterPageRoutingModule} from './filter-page-routing.module';
import { GeneralInfoOnRisksComponent } from './general-info-on-risks/general-info-on-risks.component';
import { RiskConceptsComponent } from './risk-concepts/risk-concepts.component';
import { SecurityObjectivesComponent } from './security-objectives/security-objectives.component';
import { MaturityComponent } from './maturity/maturity.component';


@NgModule({
  declarations: [FilterPageComponent, GeneralInfoOnRisksComponent, RiskConceptsComponent, SecurityObjectivesComponent, MaturityComponent],
  imports: [
    CommonModule,
    FilterPageRoutingModule
  ]
})
export class FilterPageModule {
}
