import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-homework2-btn',
  templateUrl: './homework2-btn.component.html',
  styleUrls: ['./homework2-btn.component.css']
})
export class Homework2BtnComponent implements OnInit {
  @Input() v1 = 0;
  @Input() v2 = 0;
  v3 = 0;
  @Output() cal = new EventEmitter<number>();

  constructor() { }

  ngOnInit() {
  }

  actionCal() {
    this.v3 = this.v1 + this.v2;
    this.cal.emit(this.v3);
  }

}
