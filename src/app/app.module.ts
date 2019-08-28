import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { MenuComponent } from './menu/menu.component'
import { HomeComponent } from './home/home.component';
import { LinksComponent } from './links/links.component';
import { ScrollMonitorDirective } from './scroll-monitor/scroll-monitor.directive';
import { SlideComponent } from './slide/slide.component';
import { LogoComponent } from './slides/logo/logo.component';
import { AboutUsOneComponent } from './slides/about-us-one/about-us-one.component';
import { AboutUsTwoComponent } from './slides/about-us-two/about-us-two.component';

@NgModule({
  declarations: [
    AppComponent,
    MenuComponent,
    HomeComponent,
    LinksComponent,
    ScrollMonitorDirective,
    SlideComponent,
    LogoComponent,
    AboutUsOneComponent,
    AboutUsTwoComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
