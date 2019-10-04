import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  detailsDisplayed = false;
  clicksLog = [];
  clicksTimestampLog = [];

  onDisplayDetails() {
    this.detailsDisplayed = !this.detailsDisplayed;
    this.clicksLog.push(this.clicksLog.length);
    this.clicksTimestampLog.push(new Date());
  }

  getBackgroundColor(number: number) {
    return number >= 4 ? "rgb(0, 140, 255)" : "transparent";
  }
}
