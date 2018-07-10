import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute, Params } from '@angular/router';

import { ListeseriesService } from '../../../services/LISTE/listeseries.service';
import { HomeService } from '../../../services/home.service';

@Component({
  selector: 'app-listeseries',
  templateUrl: './listeseries.component.html',
  styleUrls: ['./listeseries.component.css']
})
export class ListeseriesComponent implements OnInit {

	listSeries:object[];
	sorting:string;

	constructor(
		private listeseriesService: ListeseriesService,
		private homeService: HomeService,
		private activatedRoute: ActivatedRoute
	) {

		// Get Sorting
		this.activatedRoute.queryParams.subscribe((params: Params) => {

	    	this.sorting = params['sorting'];
	    });

		if(this.sorting == undefined) {

	    	// listSeries
			this.listeseriesService.getSeries().subscribe( data => {

				this.listSeries = data.listSeries;
		  	}, err => { return false; });
	    }
	    if(this.sorting == 'bynote') {

			this.homeService.getSeriesByDate().subscribe( data => {

				this.listSeries = data.listSeriesByDate;
	  		}, err => { return false; });
	    }
	    if(this.sorting == 'bydate') {

	    	this.homeService.getSeriesByNote().subscribe( data => {

				this.listSeries = data.listSeriesByNote;
	  		}, err => {	return false; });
	    }	
	}

	ngOnInit() {
	}
}
