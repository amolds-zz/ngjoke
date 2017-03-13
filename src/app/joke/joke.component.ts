import { Component, OnInit, Input } from '@angular/core';
import { Joke } from '../joke.model';

@Component({
  selector: 'app-joke',
  templateUrl: './joke.component.html',
  styleUrls: ['./joke.component.css']
})
export class JokeComponent implements OnInit {

  @Input() joke: Joke;

  public setup: string;
  public punchline: string;
  public groans: number;
  public lols: number;

  //private aJoke: Joke = new Joke('Why did the chicken cross the road?', 'To get to the other side.');

  constructor() { 
    this.setup = 'Why did the chicken cross the road?';
    this.punchline = 'To get to the other side.';
    this.groans = 0;
    this.lols = 0;
  }

  ngOnInit() {
    this.setup = this.joke.setup;
    this.punchline = this.joke.punchline;
  }

  addGroan() {
    console.log('addGroan');
    this.groans++;
  }

  subGroan() {
    console.log('subGroan');
    this.groans--;
  }

  addLol() {
    console.log('addLol');
    this.lols++;
  }

  subLol() {
    console.log('subLol');
    this.lols--;
  }
}
