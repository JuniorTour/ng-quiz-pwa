import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {AppRoutingModule} from './app-routing.module';


import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import {CustMatModule} from './custom-material-module/cust-mat-module';


import { AppComponent } from './app.component';
import { BattleComponent } from './pages/battle/battle.component';
import { HomeComponent } from './pages/home/home.component';
import { DetailCardComponent } from './components/detail-card/detail-card.component';



@NgModule({
  declarations: [
    AppComponent,
    BattleComponent,
    HomeComponent,
    DetailCardComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    CustMatModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
