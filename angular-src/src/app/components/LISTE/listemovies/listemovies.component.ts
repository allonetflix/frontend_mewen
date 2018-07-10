import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute, Params } from '@angular/router';

import { ListemoviesService } from '../../../services/LISTE/listemovies.service';
import { HomeService } from '../../../services/home.service';

@Component({
  selector: 'app-listemovies',
  templateUrl: './listemovies.component.html',
  styleUrls: ['./listemovies.component.css']
})
export class ListemoviesComponent implements OnInit {

	listMovies:object[];
	sorting:string;

	constructor(
		private listemoviesService: ListemoviesService,
		private homeService: HomeService,
		private activatedRoute: ActivatedRoute
	) { 

		// Get Sorting
		this.activatedRoute.queryParams.subscribe((params: Params) => {

	    	this.sorting = params['sorting'];
	    });

	    if(this.sorting == undefined) {

	    	// listSeries
			this.listemoviesService.getMovies().subscribe( data => {

				this.listMovies = data.listMovies;
		  	}, err => { return false; });
	    }
	    if(this.sorting == 'bynote') {

			this.homeService.getMoviesByDate().subscribe( data => {

				this.listMovies = data.listMoviesByDate;
		  	}, err => { return false; });
	    }
	    if(this.sorting == 'bydate') {

	    	this.homeService.getMoviesByNote().subscribe( data => {

				this.listMovies = data.listMoviesByNote;
		  	}, err => {	return false; });
	    }			
	}

	ngOnInit() {
	}

}
