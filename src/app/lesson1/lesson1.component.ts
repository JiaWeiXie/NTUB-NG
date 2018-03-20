import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { BmiService } from '../bmi.service';

@Component({
  selector: 'app-lesson1',
  templateUrl: './lesson1.component.html',
  styleUrls: ['./lesson1.component.css']
})
export class Lesson1Component implements OnInit {
  @Input() twMoney = 0;
  @Output() countChange: EventEmitter<number> = new EventEmitter<number>();
  circle = 0;

  constructor(public bmiService: BmiService) { }

  ngOnInit() {
  }

  change(event: any) {
    this.countChange.emit(event);
  }

}
