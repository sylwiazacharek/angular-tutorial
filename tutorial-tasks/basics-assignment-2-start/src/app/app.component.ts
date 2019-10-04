import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  userName = '';

  isDisabled() {
    return (!this.userName || this.userName.length === 0);
  }

  resetUser() {
    this.userName = '';
    console.log("User was resetted");
  }
}
