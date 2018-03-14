import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})

export class AppComponent {
  name = 'JSON';
  google_link = 'https://www.google.com.tw/';
  now = new Date();
  aaa: Account = {
    account: 'jack',
    password: 'asasfa'
  };

  click_action() {
    this.name += 'a';
  }
}

export interface Account {
  account: string;
  password: string;
}
