import { Component, OnInit } from '@angular/core';
import { BmiService } from '../bmi.service';

@Component({
  selector: 'app-lesson7',
  templateUrl: './lesson7.component.html',
  styleUrls: ['./lesson7.component.css']
})
export class Lesson7Component implements OnInit {

  constructor(private bmiService: BmiService) { }

  ngOnInit() {
  }

  calc() {
    const bmi = this.bmiService.calBMI(180, 65);
    alert(bmi);
  }
}
