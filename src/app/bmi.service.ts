import { Injectable } from '@angular/core';

@Injectable()
export class BmiService {
  pub_temp1 = 0.0;
  constructor() { }

  calBMI(height: number, weitht: number): number {
    let bmi = 0.0;
    bmi = weitht / Math.pow((height / 100), 2);
    return bmi;
  }

}
