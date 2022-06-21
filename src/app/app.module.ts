import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { AboutUsPageComponent } from './components/about_us/about-us-page/about-us-page.component';
import {AboutUsHeaderComponent} from "./components/about_us/about-us-header/about-us-header.component";
import { AboutUsHeroComponent } from './components/about_us/about-us-hero/about-us-hero.component';
import { AboutUsVerhaalComponent } from './components/about_us/about-us-verhaal/about-us-verhaal.component';
@NgModule({
  declarations: [
    AppComponent,
    AboutUsPageComponent,
    AboutUsHeaderComponent,
    AboutUsHeroComponent,
    AboutUsVerhaalComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
