import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { HomePageComponent } from './components/home/home-page/home-page.component';
import { HomeNavbarComponent } from './components/home/home-navbar/home-navbar.component';
import { HomeFooterComponent } from './components/home/home-footer/home-footer.component';
import { HomePageWelcomeComponent } from './components/home/home-page-welcome/home-page-welcome.component';
import { HomePageGalleryComponent } from './components/home/home-page-gallery/home-page-gallery.component';
import { HomePageEliudKipchogeComponent } from './components/home/home-page-eliud-kipchoge/home-page-eliud-kipchoge.component';
import { HomePageBackroundComponent } from './components/home/home-page-backround/home-page-backround.component';
import { HomePageVideoComponent } from './components/home/home-page-video/home-page-video.component';
import { HomePageCamielComponent } from './components/home/home-page-camiel/home-page-camiel.component';

@NgModule({
  declarations: [
    AppComponent,
    HomePageComponent,
    HomeNavbarComponent,
    HomeFooterComponent,
    HomePageWelcomeComponent,
    HomePageGalleryComponent,
    HomePageEliudKipchogeComponent,
    HomePageBackroundComponent,
    HomePageVideoComponent,
    HomePageCamielComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    NgbModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
