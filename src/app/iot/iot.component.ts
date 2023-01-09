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
    new Ml(4, 'Email Spam','Several spam filtering approaches are used these days by email clients and other applications. To ensure the security and that these spam filters are continuously updated, they are powered by ML algorithms. The latest trick of spammers can easily be detected by observing specific patterns and by rule-based spam filtering. Examples of some spam filtering techniques are Perceptron and C 4.5 Decision Tree.', 'assets/email.jpg'),
    new Ml(5, 'Optimizing Search Engine Results', 'Search engines like Google make use of machine learning algorithms to improve search results. Algorithms keep track of our response to the results shown to us. For example, if the results generated are efficient and useful to the user, the user would stay on the webpage for a long time, and this would help search engines learn that the results generated are in accordance with the query.', 'assets/google.jpg'),
    new Ml(6, 'Video Surveillance and Security', 'It is tedious as well as annoying to keep track of hundreds of surveillance cameras by a single individual or even a small team of security. ML trained surveillance cameras to make this task easier by detecting any crime before it happens.', 'assets/video.jpg')

  ];
  constructor() { }

  ngOnInit(): void {

  }



}
