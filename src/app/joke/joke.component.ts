import { Component, OnInit } from '@angular/core';
import { Joke } from '../joke.model';

@Component({
  selector: 'app-joke',
  templateUrl: './joke.component.html',
  styleUrls: ['./joke.component.css']
})
export class JokeComponent implements OnInit {

  public aJoke: Joke = new Joke('Why did the chicken cross the road?', 'To get to the other side.');

  constructor() { }

  ngOnInit() {
  }

}
