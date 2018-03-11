import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';


import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import {CustMatModule} from './custom-material-module/cust-mat-module';
import {AppRoutingModule} from './app-routing.module';


import { AppComponent } from './app.component';
import { BattleComponent } from './pages/battle/battle.component';
import { HomeComponent } from './pages/home/home.component';
import { DetailCardComponent } from './components/detail-card/detail-card.component';

import {QuesService} from './services/ques.service';
import {UserInfoService} from './services/user-info.service';
import { HttpClientInMemoryWebApiModule } from 'angular-in-memory-web-api';
import { InMemoryDataService } from './services/in-memory-data.service';
import { StartCardComponent } from './components/start-card/start-card.component';
import { QuesCardComponent } from './components/ques-card/ques-card.component';
import { EndCardComponent } from './components/end-card/end-card.component';

@NgModule({
  declarations: [
    AppComponent,
    BattleComponent,
    HomeComponent,
    DetailCardComponent,
    StartCardComponent,
    QuesCardComponent,
    EndCardComponent
  ],
  imports: [
    FormsModule,
    BrowserModule,
    BrowserAnimationsModule,
    CustMatModule,
    AppRoutingModule,
    HttpClientModule,

    // The HttpClientInMemoryWebApiModule module intercepts HTTP requests
    // and returns simulated server responses.
    // Remove it when a real server is ready to receive requests.
    HttpClientInMemoryWebApiModule.forRoot(
      InMemoryDataService, { dataEncapsulation: false }
    )
  ],
  providers: [
    UserInfoService,
    QuesService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
