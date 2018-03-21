import { Component, OnInit } from '@angular/core';
import { HttpService } from '../http.service';

@Component({
  selector: 'app-call-http',
  templateUrl: './call-http.component.html',
  styleUrls: ['./call-http.component.css']
})
export class CallHttpComponent implements OnInit {
  getData: any;

  book: any = {
    title: '',
    author: ''
  };

  constructor(public httpService: HttpService) { }

  ngOnInit() {
  }

  get() {
    this.httpService.getData('posts').subscribe(
      data => {
        this.getData = data;
      },
      error => {
        console.log(error);
      },
      () => {
        console.log('get finished');
      }
    );
  }

  post() {
    this.httpService.postData('posts', this.book).subscribe(data => {
      this.getData = data;
    },
      error => {
        console.log(error);
      },
      () => {
        console.log('get finished');
      }
    );
  }

}
