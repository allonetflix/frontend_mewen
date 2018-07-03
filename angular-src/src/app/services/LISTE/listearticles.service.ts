import { Injectable } from '@angular/core';
import { Http, Headers } from '@angular/http';
import 'rxjs/add/operator/map';

@Injectable({
  providedIn: 'root'
})
export class ListearticlesService {

  constructor(private http:Http) { }

  	getArticles(){

		return this.http.get('http://localhost:3000/dataListArticles')
  			.map(res => res.json());
    }
}
