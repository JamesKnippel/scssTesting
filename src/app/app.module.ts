import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LandingComponent } from './homepage/landing/landing.component';
import { HeaderComponent } from './shared/header/header.component';
import { FeaturesComponent } from './homepage/features/features.component';
import { AboutComponent } from './homepage/about/about.component';
import { ToursComponent } from './homepage/tours/tours.component';
import { UserStoriesComponent } from './homepage/user-stories/user-stories.component';

@NgModule({
  declarations: [
    AppComponent,
    LandingComponent,
    HeaderComponent,
    FeaturesComponent,
    AboutComponent,
    ToursComponent,
    UserStoriesComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
