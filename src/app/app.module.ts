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
import { AboutUsThreeComponent } from './slides/about-us-three/about-us-three.component';
import { ProcessOneComponent } from './slides/process-one/process-one.component';
import { ProcessTwoComponent } from './slides/process-two/process-two.component';
import { ProcessThreeComponent } from './slides/process-three/process-three.component';
import { ServicesOneComponent } from './slides/services-one/services-one.component';
import { ServicesTwoComponent } from './slides/services-two/services-two.component';
import { ServicesThreeComponent } from './slides/services-three/services-three.component';
import { ScrollIntoViewDirective } from './scroll-into-view/scroll-into-view.directive';

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
    AboutUsTwoComponent,
    AboutUsThreeComponent,
    ProcessOneComponent,
    ProcessTwoComponent,
    ProcessThreeComponent,
    ServicesOneComponent,
    ServicesTwoComponent,
    ServicesThreeComponent,
    ScrollIntoViewDirective
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
