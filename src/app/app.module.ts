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
import { HeaderComponent } from './header/header.component';

import { WindowRefService } from './window-ref.service';
import { AboutUsComponent } from './about-us/about-us.component';
import { ProcessComponent } from './process/process.component';
import { ServicesAndPricingComponent } from './services-and-pricing/services-and-pricing.component';
import { MobileLogoComponent } from './mobile-logo/mobile-logo.component';
import { FooterComponent } from './footer/footer.component';

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
    LeadingBarComponent,
    HeaderComponent,
    AboutUsComponent,
    ProcessComponent,
    ServicesAndPricingComponent,
    MobileLogoComponent,
    FooterComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    AppRoutingModule,
    LottieAnimationViewModule.forRoot()
  ],
  providers: [WindowRefService],
  bootstrap: [AppComponent]
})
export class AppModule { }
