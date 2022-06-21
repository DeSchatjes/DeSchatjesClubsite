import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AboutUsPageComponent } from './components/about_us/about-us-page/about-us-page.component';
import {HomePageComponent} from "./components/home/home-page/home-page.component";

const routes: Routes = [
  { path: 'over-ons', component: AboutUsPageComponent },
  { path: '', component: HomePageComponent}
]

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
