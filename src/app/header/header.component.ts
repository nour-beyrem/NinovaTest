import { Component, OnInit } from '@angular/core';
import { DatePipe } from '@angular/common';
import { Router } from '@angular/router';


@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {
public data:String | null;
  constructor(public datepipe: DatePipe, public router: Router) {
     this.data =this.datepipe.transform((new Date), 'dd/MM/yyyy h:mm:ss');
  }

  ngOnInit(): void {

  }

}
