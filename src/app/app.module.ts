import { NgModule } from '@angular/core'
import { BrowserModule } from '@angular/platform-browser'
import { FormsModule } from '@angular/forms'

import { AppComponent } from './app.component'
import { SidebarComponent } from './sidebar/sidebar.component'
import { SidebarMenuComponent } from './sidebar-menu/sidebar-menu.component'
import { SidebarPostsComponent } from './sidebar-posts/sidebar-posts.component'
import { SidebarContactComponent } from './sidebar-contact/sidebar-contact.component'
import { ImgLinkComponent } from './img-link/img-link.component'
import { ImgSrcPipe } from './img-link/img-src.pipe'
import { PageHomeComponent } from './page-home/page-home.component'
import { PageGenericComponent } from './page-generic/page-generic.component'
import { PageElementsComponent } from './page-elements/page-elements.component'
import { AppRoutingModule } from './app-routing.module';
import { PageHomePostsComponent } from './page-home-posts/page-home-posts.component'

@NgModule({
  declarations: [
    AppComponent,
    SidebarComponent,
    SidebarMenuComponent,
    SidebarPostsComponent,
    SidebarContactComponent,
    ImgLinkComponent,
    ImgSrcPipe,
    PageHomeComponent,
    PageGenericComponent,
    PageElementsComponent,
    PageHomePostsComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})

export class AppModule { }
