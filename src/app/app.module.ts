import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { Routes, RouterModule } from '@angular/router';
import { MaterialModule } from '@angular/material';

import { AppComponent } from './app.component';
import { HelloComponent } from './hello/hello.component';
import { JokeComponent } from './joke/joke.component';
import { Test2Component } from './test2/test2.component';
import { UpvoteComponent } from './upvote/upvote.component';
import { JokelistComponent } from './jokelist/jokelist.component';

const appRoutes: Routes = [
  { path: 'jokes', component: JokelistComponent },
  { path: 'jokes/:id', component: JokeComponent },
  { path: '', redirectTo: '/jokes', pathMatch: 'full' }
]

@NgModule({
  declarations: [
    AppComponent,
    HelloComponent,
    JokeComponent,
    Test2Component,
    UpvoteComponent,
    JokelistComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    RouterModule.forRoot(appRoutes),
    MaterialModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
