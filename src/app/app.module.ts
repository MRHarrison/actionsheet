import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { RouterModule, Routes }   from '@angular/router';

import { ClarityModule } from 'clarity-angular';

import { AppComponent } from './app.component';
import { ActionsheetModule } from './actionsheet/actionsheet.module';
import { HomeComponent } from './home/home.component';

// login is a global accessible so should be defined in the root level router
const routes: Routes = [
    {path: '', component: HomeComponent},
    {path: '**', pathMatch: 'full', redirectTo: ''},
];

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    ClarityModule.forRoot(),
    RouterModule.forRoot(routes),
    ActionsheetModule
  ],
  bootstrap: [AppComponent],
})
export class AppModule { }



