import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import {NonSecuredLinkComponent} from './non-secured-link/non-secured-link.component';

const routes: Routes = [
  {
    path: '',
    loadChildren: () => import('src/app/filter-page/filter-page.module')
      .then(m => m.FilterPageModule)
  },
  {
    path: 'non-secure',
    component: NonSecuredLinkComponent
  },
  {
    path: 'filtered',
    loadChildren: () => import('src/app/filter-page/filter-page.module')
      .then(m => m.FilterPageModule)
  },
  {
    path: '**',
    loadChildren: () => import('src/app/filter-page/filter-page.module')
      .then(m => m.FilterPageModule)
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {
}
