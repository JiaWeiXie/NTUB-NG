import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-homework2',
  templateUrl: './homework2.component.html',
  styleUrls: ['./homework2.component.css']
})
export class Homework2Component implements OnInit {
  num1 = 0;
  num2 = 0;
  num3 = 0;
  constructor() { }

  ngOnInit() {
  }

  inCal(val: any) {
    this.num3 = val;
  }
}
