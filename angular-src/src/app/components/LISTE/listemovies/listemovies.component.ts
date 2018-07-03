import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-listemovies',
  templateUrl: './listemovies.component.html',
  styleUrls: ['./listemovies.component.css']
})
export class ListemoviesComponent implements OnInit {

	listelements:number[];

	constructor() { }

	ngOnInit() {

		this.listelements = [1,2,3,4,5,6];
	}

}
