import { Component, OnInit } from '@angular/core';
import { Ml } from '../model/ml';

@Component({
  selector: 'app-pic',
  templateUrl: './pic.component.html',
  styleUrls: ['./pic.component.css']
})
export class PicComponent implements OnInit {
  public mls: Ml[] = [
    new Ml(1, 'Healthcare and Medical Diagnosis', 'Machine Learning involves a variety of tools and techniques that helps solve diagnostic and prognostic problems in a variety of medical domains. Prediction of disease progression, for extraction of medical knowledge for outcomes research, for therapy and planning and support, and overall patient management are some examples where we use machine learning for the analysis of clinical parameters ',  'assets/med.jpg'),
    new Ml(2, 'Predicting Traffic', 'We all use GPS services to navigate while driving. ML, in such scenarios, helps us in our daily lives to avoid traffic and reach our destination on time. Programmed GPS works such that while we use it to navigate, it saves our locations and velocities in the central server of managing traffic, which is then used to build the map of the current traffic.', 'assets/trafic.jpg'),
    new Ml(3, 'Smart Assistants', 'Using smart assistants is what we do round the clock. We all have used Siri, Google Assistants, Alexa, and many more on our smartphones like Pixel and iPhone and smart speakers like Echo and Google Home. In addition to this, Samsung is also in the run of launching a smart TV with its virtual assistant called Bixby. As “assistants,” their job is to assist us in our day-to-day routine, all that is required from our end is to activate them.', 'assets/smart.jpg')
  ];
  constructor() { }

  ngOnInit(): void {
  }

}
