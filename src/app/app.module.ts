import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

//routes
import { RouterModule, Routes } from '@angular/router';

//components
import { AppComponent } from './app.component';
import { TeamsComponent } from './teams/teams.component';


@NgModule({
  declarations: [
    AppComponent,
    TeamsComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
