import { Injectable } from '@angular/core';
import { Http, Headers } from '@angular/http';
import 'rxjs/add/operator/map';

@Injectable({
  providedIn: 'root'
})
export class MovieService {

    constructor(private http:Http) { }

    getMovie(idObject) {

 		let paramHeaders = new Headers();
	    paramHeaders.append('Content-Type', 'application/json');

 		return this.http.post('http://localhost:3000/dataMovie', idObject, {headers: paramHeaders})
  			.map(res => res.json());
 	}

 	selectLikedMovie(object) {

 		let paramHeaders = new Headers();
	    paramHeaders.append('Content-Type', 'application/json');

 		return this.http.post('http://localhost:3000/selectLikeMovie', object, {headers: paramHeaders})
  			.map(res => res.json());
 	}

 	deleteLikedMovie(object) {

 		let paramHeaders = new Headers();
	    paramHeaders.append('Content-Type', 'application/json');

 		return this.http.post('http://localhost:3000/deleteLikeMovie', object, {headers: paramHeaders})
  			.map(res => res.json());
 	}

 	insertLikedMovie(object) {

 		// console.log("In Service it");
	
		let paramHeaders = new Headers();
	    paramHeaders.append('Content-Type', 'application/json');

 		return this.http.post('http://localhost:3000/insertLikeMovie', object, {headers: paramHeaders})
  			.map(res => res.json());
 	}
}
