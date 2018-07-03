import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-listearticles',
  templateUrl: './listearticles.component.html',
  styleUrls: ['./listearticles.component.css']
})
export class ListearticlesComponent implements OnInit {

	listelements:number[];

	constructor() { }

	ngOnInit() {

		this.listelements = [1,2,3,4,5,6];
	}
}
