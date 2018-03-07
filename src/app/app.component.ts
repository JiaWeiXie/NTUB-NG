import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  name = 'JSON';
  google_link = 'https://www.google.com.tw/';

  click_action() {
    this.name += 'a';
  }
}
