import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import {HttpClientModule} from '@angular/common/http';

import { AppComponent } from './app.component';
import { ProblemListComponent } from './components/problem-list/problem-list.component';

import { DataService} from "./services/data.service";
import { AuthService} from "./services/auth.service";
import { ProblemDetailComponent } from './components/problem-detail/problem-detail.component';
import { routing } from "./app.routes";
import { NewProblemComponent } from './components/new-problem/new-problem.component';
import { NavbarComponent } from './components/navbar/navbar.component';
import { MessagesComponent } from "./messages/messages.component";
import { ProfileComponent } from './components/profile/profile.component';
import {AuthGuardService} from "./services/auth-guard.service";

@NgModule({
  declarations: [
    AppComponent,
    ProblemListComponent,
    ProblemDetailComponent,
    NewProblemComponent,
    NavbarComponent,
    MessagesComponent,
    ProfileComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    HttpClientModule,
    routing
  ],
  providers: [{
    provide: "data",
    useClass: DataService
  }, {
      provide: "auth",
      useClass: AuthService
    },{
    provide: "authGuard",
    useClass: AuthGuardService
  }],
  bootstrap: [AppComponent]
})
export class AppModule { }
