import { Injectable } from '@angular/core';
import { Http, Headers } from '@angular/http';
import 'rxjs/add/operator/map';

@Injectable({
  providedIn: 'root'
})
export class ListemoviesService {

	constructor(private http:Http) { }

	getMovies(){

		return this.http.get('http://localhost:3000/dataListMovies')
  			.map(res => res.json());
	}
}
