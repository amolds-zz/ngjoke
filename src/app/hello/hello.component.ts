import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-hello',
  templateUrl: './hello.component.html',
  styleUrls: ['./hello.component.css']
})
export class HelloComponent implements OnInit {

  message: string = 'Hello, Earth!';

  constructor() { 
    let date = new Date();
    this.message = `Hello, it is now ${date.toDateString}`;
  }

  ngOnInit() {
  }

}
