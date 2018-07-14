import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute, Params } from '@angular/router';

import { ListearticlesService } from '../../../services/LISTE/listearticles.service';
import { HomeService } from '../../../services/home.service';


@Component({
  selector: 'app-listearticles',
  templateUrl: './listearticles.component.html',
  styleUrls: ['./listearticles.component.css']
})
export class ListearticlesComponent implements OnInit {

	listArticles:object[];
	sorting:string;

	constructor(
		private listearticlesService: ListearticlesService,
		private homeService: HomeService,
		private activatedRoute: ActivatedRoute,
	) { 

		// Get Sorting
		this.activatedRoute.queryParams.subscribe((params: Params) => {

	    	this.sorting = params['sorting'];
	    });

	    if(this.sorting == undefined) {

	    	// listArticles
			this.listearticlesService.getArticles().subscribe( data => {

				this.listArticles = data.listArticles;
		  	}, err => { return false; });
	    }
	    if(this.sorting == 'bynote') {

			this.homeService.getArticlesByNote().subscribe( data => {

				this.listArticles = data.listArticlesByNote;
		  	}, err => {	return false; });
	    }
	    if(this.sorting == 'bydate') {

	    	this.homeService.getArticlesByDate().subscribe( data => {

				this.listArticles = data.listArticlesByDate;
		  	}, err => { return false; });
	    }	
	}

	ngOnInit() {
	}
}
