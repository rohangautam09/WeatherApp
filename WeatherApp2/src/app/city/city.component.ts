import { Component, OnInit } from '@angular/core';
import {Service} from './cityservice';
import { Observable } from 'rxjs/Observable';
import {Data,Json,Main} from './city';

@Component({
  selector: 'app-city',
  templateUrl: './city.component.html',
  styleUrls: ['./city.component.css'],
  providers:[Service]
})
export class CityComponent implements OnInit {

  constructor(private s:Service) { }
  a:Json;
  b:Main;

  stat=false;
  ngOnInit() {
  }

  sub(f){
     this.stat=true;
      this.s.postdetails(f).subscribe(t=>{this.a=t;this.b=(this.a.main)});
     }

     
     

}
