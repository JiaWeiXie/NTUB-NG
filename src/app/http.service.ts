import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders} from '@angular/common/http';

@Injectable()
export class HttpService {
  server = 'http://127.0.0.1:3000/';
  headers = new HttpHeaders({'Content-Type': 'application/json'});

  constructor(private _http: HttpClient) { }

  getData(url: string) {

    return this._http.get(this.server + url, {headers: this.headers});
  }

  postData(url: string, bodyData: any) {
    return this._http.post(this.server + url, bodyData, {headers: this.headers});
  }

  putData() {

  }

  deleteData() {

  }



}
