import { Component, OnInit } from '@angular/core';
import { BmiService } from '../bmi.service';

@Component({
  selector: 'app-lesson2',
  templateUrl: './lesson2.component.html',
  styleUrls: ['./lesson2.component.css']
})
export class Lesson2Component implements OnInit {
  isShow = true;
  cal = 0;
  constructor(private bmiService: BmiService) { }

  ngOnInit() {
    this.bmiService.pub_temp1 = 99;
  }

  clickAction() {
    this.isShow = !this.isShow;
  }
}
