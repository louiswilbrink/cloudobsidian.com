import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeroComponent } from './hero/hero.component';
import { PricingComponent } from './pricing/pricing.component';
import { InfographicComponent } from './infographic/infographic.component';
import { LogoComponent } from './hero/logo/logo.component';
import { LetterheadComponent } from './hero/letterhead/letterhead.component';
import { HeaderComponent } from './header/header.component';

@NgModule({
  declarations: [
    AppComponent,
    HeroComponent,
    PricingComponent,
    InfographicComponent,
    LogoComponent,
    LetterheadComponent,
    HeaderComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
