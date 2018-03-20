import { Injectable } from '@angular/core';

@Injectable()
export class Hw3Service {
  num1 = 0;
  num2 = 0;
  num3 = 0;
  constructor() { }

  calc(): number {
    return this.num1 + this.num2;
  }
}
