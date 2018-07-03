import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-movie',
  templateUrl: './movie.component.html',
  styleUrls: ['./movie.component.css']
})
export class MovieComponent implements OnInit {

	listcomments: number[];

	constructor() { }

	ngOnInit() {

		this.listcomments = [1,2,3,4];
	}
}
