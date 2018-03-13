import { Component, OnInit } from '@angular/core';
import { lstat } from 'fs';

@Component({
  selector: 'app-pratice1',
  templateUrl: './pratice1.component.html',
  styleUrls: ['./pratice1.component.css']
})
export class Pratice1Component implements OnInit {
  english: EnglishDic = {
    English: '',
    Chinese: ''
  };

  list: EnglishDic[] = [];
  keyword: string;

  constructor() { }

  ngOnInit() {
  }

  save() {
    console.log(this.english);
    const _dic: EnglishDic = Object.assign({}, this.english);
    this.list.push(_dic);
  }

}

export interface EnglishDic {
  English: string;
  Chinese: string;
}
