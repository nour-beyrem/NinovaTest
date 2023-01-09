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
    new Ml(3, 'Smart Assistants', 'Using smart assistants is what we do round the clock. We all have used Siri, Google Assistants, Alexa, and many more on our smartphones like Pixel and iPhone and smart speakers like Echo and Google Home. In addition to this, Samsung is also in the run of launching a smart TV with its virtual assistant called Bixby. As “assistants,” their job is to assist us in our day-to-day routine, all that is required from our end is to activate them.', 'assets/smart.jpg'),
    new Ml(4, 'Email Spam','Several spam filtering approaches are used these days by email clients and other applications. To ensure the security and that these spam filters are continuously updated, they are powered by ML algorithms. The latest trick of spammers can easily be detected by observing specific patterns and by rule-based spam filtering. Examples of some spam filtering techniques are Perceptron and C 4.5 Decision Tree.', 'assets/email.jpg'),
    new Ml(5, 'Optimizing Search Engine Results', 'Search engines like Google make use of machine learning algorithms to improve search results. Algorithms keep track of our response to the results shown to us. For example, if the results generated are efficient and useful to the user, the user would stay on the webpage for a long time, and this would help search engines learn that the results generated are in accordance with the query.', 'assets/google.jpg'),
    new Ml(6, 'Video Surveillance and Security', 'It is tedious as well as annoying to keep track of hundreds of surveillance cameras by a single individual or even a small team of security. ML trained surveillance cameras to make this task easier by detecting any crime before it happens.', 'assets/video.jpg')
  ];
  constructor() { }

  ngOnInit(): void {
  }

}
