import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-listeseries',
  templateUrl: './listeseries.component.html',
  styleUrls: ['./listeseries.component.css']
})
export class ListeseriesComponent implements OnInit {

	listelements:number[];

	constructor() { }

	ngOnInit() {

		this.listelements = [1,2,3,4,5,6];
	}
}
