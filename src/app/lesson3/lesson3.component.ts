import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-lesson3',
  templateUrl: './lesson3.component.html',
  styleUrls: ['./lesson3.component.css']
})
export class Lesson3Component implements OnInit {
  users: Object[] = [
    { 'name': 'Jack', 'address': 'ntub' },
    { 'name': 'Jack1', 'address': 'ntub' },
    { 'name': 'Jack2', 'address': 'ntub' },
  ];

  nums: Number[] = [1, 2, 3, 4, 5, 6, 7, 8];
  constructor() { }

  ngOnInit() {
  }

}
