import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { LottieAnimationViewModule } from 'ng-lottie';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { MenuComponent } from './menu/menu.component'
import { HomeComponent } from './home/home.component';
import { LinksComponent } from './links/links.component';
import { HomeComponent as HomeSlideComponent } from './slides/home/home.component';
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
import { LogoComponent } from './logo/logo.component';
import { LeadingBarComponent } from './leading-bar/leading-bar.component';

@NgModule({
  declarations: [
    AppComponent,
    MenuComponent,
    HomeComponent,
    LinksComponent,
    HomeSlideComponent,
    AboutUsOneComponent,
    AboutUsTwoComponent,
    AboutUsThreeComponent,
    ProcessOneComponent,
    ProcessTwoComponent,
    ProcessThreeComponent,
    ServicesOneComponent,
    ServicesTwoComponent,
    ServicesThreeComponent,
    ScrollIntoViewDirective,
    LogoComponent,
    LeadingBarComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    AppRoutingModule,
    LottieAnimationViewModule.forRoot()
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
