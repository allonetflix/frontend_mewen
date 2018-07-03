import { Component, OnInit } from '@angular/core';

import { ListeseriesService } from '../../../services/LISTE/listeseries.service';

@Component({
  selector: 'app-listeseries',
  templateUrl: './listeseries.component.html',
  styleUrls: ['./listeseries.component.css']
})
export class ListeseriesComponent implements OnInit {

	listSeries:object[];

	constructor(
		private listeseriesService: ListeseriesService
	) {
		// listSeries
		this.listeseriesService.getSeries().subscribe( data => {

			this.listSeries = data.listSeries;
	  	}, err => { return false; });
	}

	ngOnInit() {
	}
}
