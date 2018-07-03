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
}
