import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { HeroesComponent } from './heroes/heroes.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { HeroDetailComponent } from './hero-detail/hero-detail.component';
import { WeaponsComponent } from './weapons/weapons.component';
import { from } from 'rxjs';
import { WeaponDetailComponent } from './weapon-detail/weapon-detail.component';
import { LogComponent } from './log/log.component';
import { ClickMeComponent } from './click-me/click-me.component';
import { KeyUpComponent } from './key-up/key-up.component';
import { LoopBackComponent } from './loop-back/loop-back.component';
import { LittleTourComponent } from './little-tour/little-tour.component';

/**
 A typical Angular Route has two properties:
    path: a string that matches the URL in the browser address bar.
    component: the component that the router should create when navigating to this route.

 */
const routes: Routes =[
  { 
    path: 'heroes', 
    component: HeroesComponent 
  },
  {
    path: 'dashboard',
    component: DashboardComponent
  },
  {
    path: '',
    redirectTo: '/dashboard',
    pathMatch: 'full'
  },
  // :id indicates that :id is a placeholder for a specific hero id.
  {
    path: 'hero-detail/:id', 
    component: HeroDetailComponent
  },
  {
    path: 'weapons',
    component: WeaponsComponent
  },
  {
    path: 'weapon-detail/:id',
    component: WeaponDetailComponent
  },
  {
    path: 'log',
    component: LogComponent
  },
  {
    path: 'click',
    component: ClickMeComponent
  },
  {
    path: 'key',
    component: KeyUpComponent
  },
  {
    path: 'loopback',
    component: LoopBackComponent
  },
  {
    path: 'little-tour',
    component: LittleTourComponent
  }

];

@NgModule({
  //  First imports RouterModule and Routes so the app can have routing functionality.
  //  Routes tell the Router which view to display when a user clicks a link or pastes a URL into the browser address bar.
  //  forRoot() method supplies the service providers and directives needed for routing, 
  //  and performs the initial navigation based on the current browser URL
  imports: [RouterModule.forRoot(routes)],
  //  Gives the Router somewhere to go once you configure the routes.
  exports: [RouterModule]
})
export class AppRoutingModule { }
