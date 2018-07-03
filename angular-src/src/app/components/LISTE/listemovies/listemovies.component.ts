import { Component, OnInit } from '@angular/core';

import { ListemoviesService } from '../../../services/LISTE/listemovies.service';

@Component({
  selector: 'app-listemovies',
  templateUrl: './listemovies.component.html',
  styleUrls: ['./listemovies.component.css']
})
export class ListemoviesComponent implements OnInit {

	listMovies:object[];

	constructor(
		private listemoviesService: ListemoviesService
	) { 

		// listArticles
		this.listemoviesService.getMovies().subscribe( data => {

			console.log(data);

			this.listMovies = data.listMovies;
			console.log((this.listMovies).length);
	  	}, err => { return false; });
	}

	ngOnInit() {
	}

}
