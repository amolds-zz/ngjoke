import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';

import { AppComponent } from './app.component';
import { HelloComponent } from './hello/hello.component';
import { JokeComponent } from './joke/joke.component';
import { Test2Component } from './test2/test2.component';
import { UpvoteComponent } from './upvote/upvote.component';
import { JokelistComponent } from './jokelist/jokelist.component';

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
    HttpModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
