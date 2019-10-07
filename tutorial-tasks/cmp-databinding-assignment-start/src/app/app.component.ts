import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  numbers: number[] = [];

  onGameEvent(increment: number) {
    console.log(increment);
    this.numbers.push(increment);
  }
}
