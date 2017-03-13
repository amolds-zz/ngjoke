import { Component, OnInit, Input } from '@angular/core';
import { Joke } from '../joke.model';

@Component({
  selector: 'app-jokelist',
  templateUrl: './jokelist.component.html',
  styleUrls: ['./jokelist.component.scss']
})
export class JokelistComponent implements OnInit {

  @Input() jokes: Array<Joke>;
  constructor() { 
    
  }

  ngOnInit() {
    this.jokes = Joke.getJokes;
    console.log("# jokes = ", this.jokes.length);
  }

}
