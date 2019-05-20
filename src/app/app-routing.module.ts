import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

// Components
import { HeroComponent } from './hero/hero.component';
import { PricingComponent } from './pricing/pricing.component';
import { InfographicComponent } from './infographic/infographic.component';

const routes: Routes = [{
  path: 'home', 
  component: InfographicComponent,
}, {
  path: 'pricing',
  component: PricingComponent
}, {
  path: '',
  redirectTo: '/home', 
  pathMatch: 'full'
}, {
  path: '**',
  redirectTo: '/home', 
  pathMatch: 'full'
}];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
