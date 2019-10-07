import { Component, OnInit, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-game-control',
  templateUrl: './game-control.component.html',
  styleUrls: ['./game-control.component.css']
})
export class GameControlComponent implements OnInit {
  @Output() gameEvent = new EventEmitter<number>();

  increment = 0;
  intervalTimer = null;

  constructor() { }

  ngOnInit() {
  }

  onGameStart() {
    if (this.intervalTimer === null) {
      this.intervalTimer = setInterval(() => {
        this.gameEvent.emit(this.increment++);   
      }, 1000);
    }
  }

  onGameStop() {
    clearInterval(this.intervalTimer);
    this.intervalTimer = null;
  }
}
