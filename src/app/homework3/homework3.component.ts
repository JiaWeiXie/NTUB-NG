import { Component, OnInit } from '@angular/core';
import { Hw3Service } from '../hw3.service';

@Component({
  selector: 'app-homework3',
  templateUrl: './homework3.component.html',
  styleUrls: ['./homework3.component.css']
})
export class Homework3Component implements OnInit {

  constructor(public hw3Service: Hw3Service ) { }

  ngOnInit() {
  }

}
