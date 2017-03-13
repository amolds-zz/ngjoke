import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-upvote',
  templateUrl: './upvote.component.html',
  styleUrls: ['./upvote.component.scss']
})
export class UpvoteComponent implements OnInit {

  @Input() votes: number;
  @Output() incrementVotes = new EventEmitter<number>();
  @Output() decrementVotes = new EventEmitter<number>();

  constructor() { }

  ngOnInit() {
  }

  onIncrement():void {
    //this.votes++;
    console.log('onIncrement');
    this.incrementVotes.emit(this.votes+1);
  }

  onDecrement():void {
    //this.votes--;
    console.log('onDecrement');
    this.decrementVotes.emit(this.votes-1);
  }
}
