import { Component, OnInit } from '@angular/core';
import { Hw3Service } from '../hw3.service';

@Component({
  selector: 'app-homework3-btn',
  templateUrl: './homework3-btn.component.html',
  styleUrls: ['./homework3-btn.component.css']
})
export class Homework3BtnComponent implements OnInit {

  constructor(public hw3Service: Hw3Service) { }

  ngOnInit() {
  }

  actionCal() {
    this.hw3Service.num3 = this.hw3Service.calc();
  }
}
