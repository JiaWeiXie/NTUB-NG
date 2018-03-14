import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-lesson6',
  templateUrl: './lesson6.component.html',
  styleUrls: ['./lesson6.component.css']
})
export class Lesson6Component implements OnInit {
  v = 0;
  color = '#9575CD';
  constructor() { }

  ngOnInit() {
  }
  showOut(event: any) {
    this.v = event;
  }

  clickA(event: any) {
    this.color = '#26A69A';
  }

  clickB(event: any) {
    this.color = '#18FFFF';
  }

  clickC(event: any) {
    this.color = '#9CCC65';
  }
}
