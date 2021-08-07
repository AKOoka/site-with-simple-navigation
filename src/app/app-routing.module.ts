import { NgModule } from '@angular/core'
import { PageGenericComponent } from './page-generic/page-generic.component'
import { RouterModule, Routes } from '@angular/router'
import { PageElementsComponent } from './page-elements/page-elements.component'
import { PageHomeComponent } from './page-home/page-home.component'

const routes: Routes = [
  { path: '', redirectTo: '/home', pathMatch: 'full' },
  { path: 'home', component: PageHomeComponent },
  { path: 'elements', component: PageElementsComponent },
  { path: 'generic', component: PageGenericComponent }
]

@NgModule({
  declarations: [],
  imports: [
    RouterModule.forRoot(routes, { scrollPositionRestoration: 'top' })
  ],
  exports: [
    RouterModule
  ]
})

export class AppRoutingModule { }
