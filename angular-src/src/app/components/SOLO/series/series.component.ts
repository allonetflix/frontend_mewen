import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-series',
  templateUrl: './series.component.html',
  styleUrls: ['./series.component.css']
})
export class SeriesComponent implements OnInit {

	listcomments: number[];

	constructor() { }

	ngOnInit() {

		this.listcomments = [1,2,3,4];
	}
}
