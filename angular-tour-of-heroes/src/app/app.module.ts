import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms'; // <-- NgModel lives here

import { AppComponent } from './app.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { HeroDetailComponent } from './hero-detail/hero-detail.component';
import { HeroesComponent } from './heroes/heroes.component';
import { MessagesComponent } from './messages/messages.component';
import { AppRoutingModule } from './app-routing.module';
import { HttpClientModule } from '@angular/common/http';
import { HttpClientInMemoryWebApiModule } from 'angular-in-memory-web-api';
import { InMemoryDataService }  from './in-memory-data.service';
import { HeroSearchComponent } from './hero-search/hero-search.component';
import { RouterModule } from '@angular/router';
import { WeaponsComponent } from './weapons/weapons.component';
import { WeaponDetailComponent } from './weapon-detail/weapon-detail.component';
import { LogComponent } from './log/log.component';
import { ClickMeComponent } from './click-me/click-me.component';
import { KeyUpComponent } from './key-up/key-up.component';
import { LoopBackComponent } from './loop-back/loop-back.component';
import { LittleTourComponent } from './little-tour/little-tour.component';

@NgModule({
  declarations: [
    AppComponent,
    HeroesComponent,
    HeroDetailComponent,
    MessagesComponent,
    DashboardComponent,
    HeroSearchComponent,    
    WeaponsComponent, 
    WeaponDetailComponent, 
    LogComponent, ClickMeComponent, KeyUpComponent, LoopBackComponent, LittleTourComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    AppRoutingModule,
    HttpClientModule,
    // The HttpClientInMemoryWebApiModule module intercepts HTTP requests
    // and returns simulated server responses.
    // Remove it when a real server is ready to receive requests.
    HttpClientInMemoryWebApiModule.forRoot(
      InMemoryDataService, { dataEncapsulation: false }
      )
      /*,
      
    RouterModule.forRoot([
      { path: '', component: DiceComponent}
    ])*/
    ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
