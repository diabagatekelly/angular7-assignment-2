import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})

export class AppComponent {
  username = '';
  allowClick = false;

  onUpdateUsername(event: any) {
    this.username = event.target.value;
  }

  onIsClickable() {
    if (this.username === '') {
    this.allowClick = false;
    } else {
    this.allowClick = true;
    }
  }

  onClick() {
    this.username = '';
  }
}

