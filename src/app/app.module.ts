// src/app/app.module.ts
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { CheckpointsComponent } from './checkpoints/checkpoints.component';
import { AmericanGreetingsComponent } from './jobs/american-greetings/american-greetings.component';
import { CognizantComponent } from './jobs/cognizant/cognizant.component';
import { SnaponComponent } from './jobs/snapon/snapon.component';
import { OneandoneInternetComponent } from './jobs/oneandone-internet/oneandone-internet.component';
import { AboutMeComponent } from './about-me/about-me.component';
import { HomeComponent } from './home/home.component';
import { RecommendationsComponent } from './recommendations/recommendations.component';

@NgModule({
  declarations: [
    AppComponent,
    AboutMeComponent,
    CheckpointsComponent,
    AmericanGreetingsComponent,
    CognizantComponent,
    SnaponComponent,
    OneandoneInternetComponent,
    HomeComponent,
    RecommendationsComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
