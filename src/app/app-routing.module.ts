import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

// Components
import { MenuComponent } from './menu/menu.component';

const routes: Routes = [{
  path: 'home', 
  component: MenuComponent,
}, {
  path: 'menu',
  component: MenuComponent
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
