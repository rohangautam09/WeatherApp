import { Injectable } from '@angular/core';
import { Http , Response,Headers,RequestOptions } from '@angular/http';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/map';//for mapping
import 'rxjs/add/operator/do';
import 'rxjs/add/operator/catch';// for exception
import { Data, Json } from './city';

@Injectable()
export class Service{
    constructor(private http: Http){}
    
    postdetails(f:Data):Observable<Json>{
        return this.http.get(
            'http://api.openweathermap.org/data/2.5/' +
            'weather?q='+ f +
            '&appid='+ '682b95108812ffb6bb8996d8ef0c2392' +
            '&units=' + 'metric').map(response => response.json())
}

    
    
    
}