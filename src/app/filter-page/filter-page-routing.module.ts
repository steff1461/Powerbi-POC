import {NgModule} from '@angular/core';
import {Route, RouterModule} from '@angular/router';
import {FilterPageComponent} from './filter-page.component';

const filterPageRoute: Route[] = [
  {
    path: '',
    component: FilterPageComponent,
    children: [
      // {
      //   path: 'generalInfoRisks',
      //   component: GeneralInfoOnRisksComponent
      // }
    ]
  }
];

@NgModule({
  imports: [
    RouterModule.forChild(filterPageRoute)
  ],
  exports: [RouterModule]
})
export class FilterPageRoutingModule {
}
