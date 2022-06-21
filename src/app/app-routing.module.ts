import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AboutUsPageComponent } from './components/about_us/about-us-page/about-us-page.component';
import {HomePageComponent} from "./components/home/home-page/home-page.component";

const routes: Routes = [
  { path: '', component: HomePageComponent},
  { path: 'over-ons', component: AboutUsPageComponent }
]

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
