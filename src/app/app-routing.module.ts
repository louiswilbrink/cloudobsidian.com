import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

// Components
import { HomeComponent } from './home/home.component';
import { AboutUsComponent } from './about-us/about-us.component';
import { ProcessComponent } from './process/process.component';
import { ServicesAndPricingComponent } from './services-and-pricing/services-and-pricing.component';
import { MenuComponent } from './menu/menu.component';

const routes: Routes = [{
  path: '', 
  component: HomeComponent,
}, {
  path: 'menu',
  component: MenuComponent
}, {
  path: 'about-us',
  component: AboutUsComponent
}, {
  path: 'process',
  component: ProcessComponent
}, {
  path: 'services-and-pricing',
  component: ServicesAndPricingComponent
}, {
  path: '',
  redirectTo: '/', 
  pathMatch: 'full'
}, {
  path: '**',
  redirectTo: '/', 
  pathMatch: 'full'
}];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
