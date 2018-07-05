import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute, Params } from '@angular/router';

import { MovieService } from '../../../services/SOLO/movie.service';

@Component({
  selector: 'app-movie',
  templateUrl: './movie.component.html',
  styleUrls: ['./movie.component.css']
})
export class MovieComponent implements OnInit {

	listcomments: number[];
	movie:object;
	id:number;

	constructor(
		private activatedRoute: ActivatedRoute,
		private movieService: MovieService
	) { 

		this.activatedRoute.queryParams.subscribe((params: Params) => {

	    	this.id = params['id'];
	    });

		// Movie

		const idObject = { _id: this.id	}

		this.movieService.getMovie(idObject).subscribe( data => {

			this.movie = data.movie[0];
			console.log("HERE IS MOVIE " + this.movie);

	  	}, err => { return false; });
	}

	ngOnInit() {

		this.listcomments = [1,2,3,4];
	}
}
