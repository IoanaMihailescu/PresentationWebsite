import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';

const routes: Routes = [
  { path: '', redirectTo: 'about-me', pathMatch: 'full' },
  { path: 'about-me', component: HomeComponent },
  { path: 'recommendations', component: HomeComponent },
  { path: 'oneandone-internet', component: HomeComponent },
  { path: 'american-greetings', component: HomeComponent },
  { path: 'cognizant', component: HomeComponent },
  { path: 'snapon', component: HomeComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
