import { Injectable } from '@angular/core';
import { Http, Headers } from '@angular/http';
import 'rxjs/add/operator/map';

@Injectable({
  providedIn: 'root'
})
export class ArticleService {

 	constructor(private http:Http) { }

 	getArticle(idObject) {

 		let paramHeaders = new Headers();
	    paramHeaders.append('Content-Type', 'application/json');

 		return this.http.post('http://localhost:3000/dataArticle', idObject, {headers: paramHeaders})
  			.map(res => res.json());
 	}

 	getUsername(idObject) {

 		let paramHeaders = new Headers();
	    paramHeaders.append('Content-Type', 'application/json');

 		return this.http.post('http://localhost:3000/nameUser', idObject, {headers: paramHeaders})
  			.map(res => res.json());
 	}

 	// Like

 	selectLikedArticle(object) {

 		let paramHeaders = new Headers();
	    paramHeaders.append('Content-Type', 'application/json');

 		return this.http.post('http://localhost:3000/selectLikeArticle', object, {headers: paramHeaders})
  			.map(res => res.json());
 	}

 	deleteLikedArticle(object) {

 		let paramHeaders = new Headers();
	    paramHeaders.append('Content-Type', 'application/json');

 		return this.http.post('http://localhost:3000/deleteLikeArticle', object, {headers: paramHeaders})
  			.map(res => res.json());
 	}

 	insertLikedArticle(object) {
	
		let paramHeaders = new Headers();
	    paramHeaders.append('Content-Type', 'application/json');

 		return this.http.post('http://localhost:3000/insertLikeArticle', object, {headers: paramHeaders})
  			.map(res => res.json());
 	}

 	// Note

 	selectNotedArticle(object2) {

 		let paramHeaders = new Headers();
	    paramHeaders.append('Content-Type', 'application/json');

 		return this.http.post('http://localhost:3000/selectNoteArticle', object2, {headers: paramHeaders})
  			.map(res => res.json());
 	}

 	updateNoteArticle(object) {

 		let paramHeaders = new Headers();
	    paramHeaders.append('Content-Type', 'application/json');

 		return this.http.post('http://localhost:3000/updateNoteArticle', object, {headers: paramHeaders})
  			.map(res => res.json());
 	}

 	insertNotedArticle(object2) {

 		let paramHeaders = new Headers();
	    paramHeaders.append('Content-Type', 'application/json');

 		return this.http.post('http://localhost:3000/insertNoteArticle', object2, {headers: paramHeaders})
  			.map(res => res.json());
 	}
}
