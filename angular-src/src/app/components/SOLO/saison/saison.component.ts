import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-saison',
  templateUrl: './saison.component.html',
  styleUrls: ['./saison.component.css']
})
export class SaisonComponent implements OnInit {

	listcomments:number[];

	constructor() { }

	ngOnInit() {

		this.listcomments = [1,2,3,4];
	}
}
