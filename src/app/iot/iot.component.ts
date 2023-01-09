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
    new Ml(3, 'Vacuum cleaners', 'This IoT device allows the user to program the cleaning, and the robot does the rest with great results (even on the hardest places). This device even has a self-emptying feature, that is, the robot itself goes to the charging station and deposits the dirt into a replaceable dust bag', 'assets/vaccum.jpg'),
    new Ml(4, 'Smart toothbrush','Among the IoT devices examples IS, smart toothbrushes arise as an interesting bet for educating people in how to use this product to keep a good oral health. This device would connect to an app on the phone and show the user when a specific area of the mouth is clean. Also, the app shows the users when they need to brush their teeth or when to change the head of the product for a new one.', 'assets/tooth.jpg'),
    new Ml(5, 'Smart lights', 'Smart lights, really? Well, why not? Energy is raising its costs, and being able to control the energy levels at home would be a great benefit in the long-run. You can control everything from your phone, even when you are not at home, you could set the lights to turn on at a certain time, maybe to persuade potential thieves to stay away from your house.', 'assets/light.jpg'),
    new Ml(6, 'Smart baby monitor', 'One of the most interesting IoT devices examples in daily life are the ones related to the babies. Since IoT devices interest has grown in people, it has opened many options for a market which hasn’t been explored enough, baby monitoring.', 'assets/baby.jpg')

  ];
  constructor() { }

  ngOnInit(): void {

  }



}
