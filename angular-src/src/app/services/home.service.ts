import { Injectable } from '@angular/core';
import { Http, Headers } from '@angular/http';
import 'rxjs/add/operator/map';

@Injectable({
  providedIn: 'root'
})
export class HomeService {

	constructor(private http:Http) { }


	getDonneesByDate(){

		return this.http.get('http://localhost:3000/dataListArticlesByDate')
  			.map(res => res.json());
    }
}
