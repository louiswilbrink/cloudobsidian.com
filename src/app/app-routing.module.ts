import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

// Components
import { HomeComponent } from './home/home.component';
import { MenuComponent } from './menu/menu.component';

const routes: Routes = [{
  path: '', 
  component: HomeComponent,
}, {
  path: 'menu',
  component: MenuComponent
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
