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

  // Like

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
	
		let paramHeaders = new Headers();
	    paramHeaders.append('Content-Type', 'application/json');

 		return this.http.post('http://localhost:3000/insertLikeMovie', object, {headers: paramHeaders})
  			.map(res => res.json());
 	}

   // Note

   selectNotedMovie(object2) {

     let paramHeaders = new Headers();
      paramHeaders.append('Content-Type', 'application/json');

     return this.http.post('http://localhost:3000/selectNoteMovie', object2, {headers: paramHeaders})
        .map(res => res.json());
   }

   updateNoteMovie(object) {

     let paramHeaders = new Headers();
      paramHeaders.append('Content-Type', 'application/json');

     return this.http.post('http://localhost:3000/updateNoteMovie', object, {headers: paramHeaders})
        .map(res => res.json());
   }

   insertNotedMovie(object2) {

     let paramHeaders = new Headers();
      paramHeaders.append('Content-Type', 'application/json');

     return this.http.post('http://localhost:3000/insertNoteMovie', object2, {headers: paramHeaders})
        .map(res => res.json());
   }
}
