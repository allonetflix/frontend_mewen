import { Injectable } from '@angular/core';
import { Http, Headers } from '@angular/http';
import 'rxjs/add/operator/map';

@Injectable({
  providedIn: 'root'
})
export class HomeService {

	constructor(private http:Http) { }

    // Articles
	  getArticlesByDate(){

		return this.http.get('http://localhost:3000/dataListArticlesByDate')
  			.map(res => res.json());
    }

    getArticlesByNote(){

		return this.http.get('http://localhost:3000/dataListArticlesByNote')
  			.map(res => res.json());
    }

    getArticlesBySoon(){

		return this.http.get('http://localhost:3000/dataListArticlesBySoon')
  			.map(res => res.json());
    }

    // Series
    getSeriesByDate(){

		return this.http.get('http://localhost:3000/dataListSeriesByDate')
  			.map(res => res.json());
    }

    getSeriesByNote(){

		return this.http.get('http://localhost:3000/dataListSeriesByNote')
  			.map(res => res.json());
    }

  // Movies
    getMoviesByDate(){

		return this.http.get('http://localhost:3000/dataListMoviesByDate')
  			.map(res => res.json());
    }

    getMoviesByNote(){

		return this.http.get('http://localhost:3000/dataListMoviesByNote')
  			.map(res => res.json());
    }

    getMoviesBySoon(){

		return this.http.get('http://localhost:3000/dataListMoviesBySoon')
  			.map(res => res.json());
    }
}
