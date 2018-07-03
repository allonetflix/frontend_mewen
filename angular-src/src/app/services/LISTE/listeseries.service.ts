import { Injectable } from '@angular/core';
import { Http, Headers } from '@angular/http';
import 'rxjs/add/operator/map';

@Injectable({
  providedIn: 'root'
})
export class ListeseriesService {

  constructor(private http:Http) { }

    getSeries(){

		return this.http.get('http://localhost:3000/dataListSeries')
  			.map(res => res.json());
    }
}
