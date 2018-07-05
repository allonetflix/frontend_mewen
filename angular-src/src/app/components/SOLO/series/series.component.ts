import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute, Params } from '@angular/router';

import { SerieService } from '../../../services/SOLO/serie.service';

@Component({
  selector: 'app-series',
  templateUrl: './series.component.html',
  styleUrls: ['./series.component.css']
})
export class SeriesComponent implements OnInit {

	listcomments: number[];
	serie:object;
	id:number;

	constructor(
		private activatedRoute: ActivatedRoute,
		private serieService: SerieService
	) { 

		this.activatedRoute.queryParams.subscribe((params: Params) => {

	    	this.id = params['id'];
	    });

		// Serie

		const idObject = { _id: this.id	}

		this.serieService.getSerie(idObject).subscribe( data => {

			this.serie = data.serie[0];

	  	}, err => { return false; });
	}

	ngOnInit() {

		this.listcomments = [1,2,3,4];
	}
}
