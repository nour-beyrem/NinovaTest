import { Component, OnInit, NgModule } from '@angular/core';
import { NgForm } from '@angular/forms';

import { Ml } from '../model/ml';

@Component({
  selector: 'app-iot',
  templateUrl: './iot.component.html',
  styleUrls: ['./iot.component.css']
})
export class IotComponent implements OnInit {

 iotnew = new Ml();
  public iots: Ml[] = [
    new Ml(1, 'Smart washing machines', 'Washing machines can now be controlled from your phone, and allows you to program when to wash your clothes, even if you are at the office. ',  'assets/wachingmach.jpg'),
    new Ml(2, 'Smart TVs', 'Nowadays, TVs have wifi integrated and allow you to connect to the internet, you can even share videos, pics, or the screen of your phone. You can speak to it and ask for specific videos you want to watch. TVs now are an essential part of the IoT devices you must have at home.', 'assets/tv.jpg'),
    new Ml(3, 'Vacuum cleaners', 'This IoT device allows the user to program the cleaning, and the robot does the rest with great results (even on the hardest places). This device even has a self-emptying feature, that is, the robot itself goes to the charging station and deposits the dirt into a replaceable dust bag', 'assets/vaccum.jpg')
  ];
  constructor() { }

  ngOnInit(): void {

  }



}
