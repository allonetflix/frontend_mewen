import { Component, OnInit } from '@angular/core';

import { ListearticlesService } from '../../../services/LISTE/listearticles.service';


@Component({
  selector: 'app-listearticles',
  templateUrl: './listearticles.component.html',
  styleUrls: ['./listearticles.component.css']
})
export class ListearticlesComponent implements OnInit {

	listArticles:object[];

	constructor(
		private listearticlesService: ListearticlesService
	) { 

		// listArticles
		this.listearticlesService.getArticles().subscribe( data => {

			this.listArticles = data.listArticles;
	  	}, err => { return false; });
	}

	ngOnInit() {
	}
}
