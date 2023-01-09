import { Injectable } from '@angular/core';
import { Ml } from './model/ml';

@Injectable({
  providedIn: 'root'
})
export class IotService {


  iots: Ml[] = [];
  constructor() { }

  addIot(iot: Ml): void {
    this.iots.push(iot);
  }

  getIots(): Ml[] {
    return this.iots;
  }
}
