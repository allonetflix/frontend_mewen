import { Component, OnInit } from '@angular/core';
import { carousel } from './carousel';
import { Router } from '@angular/router';

import { AppComponent } from '../../app.component';
import { HomeService } from '../../services/home.service';
import { ListearticlesService } from '../../services/LISTE/listearticles.service';
import { ListemoviesService } from '../../services/LISTE/listemovies.service';

import * as $ from "jquery";

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

	listTest:number[];
	table:any;
	listArticles:object[];
	listArticlesByDate:object[];
	listArticlesByNote:object[];
	listArticlesBySoon:object[];
	listSeriesByDate:object[];
	listSeriesByNote:object[];
	listMovies:object[];
	listMoviesByDate:object[];
	listMoviesByNote:object[];
	listMoviesBySoon:object[];

	constructor(
		private homeService: HomeService,
		private listearticlesService: ListearticlesService,
		private listemoviesService: ListemoviesService,
		private appComponent: AppComponent,
  		private router: Router
  	) {

		// listArticles
		this.homeService.getArticlesByDate().subscribe( data => {

			this.listArticlesByDate = data.listArticlesByDate;
	  	}, err => { return false; });

		this.homeService.getArticlesByNote().subscribe( data => {

			this.listArticlesByNote = data.listArticlesByNote;
	  	}, err => {	return false; });

	  	this.homeService.getArticlesBySoon().subscribe( data => {

			this.listArticlesBySoon = data.listArticlesBySoon;
	  	}, err => {	return false; });

		this.listearticlesService.getArticles().subscribe( data => {

			this.listArticles = data.listArticles;
	  	}, err => { return false; });

	  	// listSeries
		this.homeService.getSeriesByDate().subscribe( data => {

			this.listSeriesByDate = data.listSeriesByDate;
	  	}, err => { return false; });

		this.homeService.getSeriesByNote().subscribe( data => {

			this.listSeriesByNote = data.listSeriesByNote;
	  	}, err => {	return false; });

	  	// listMovies
		this.homeService.getMoviesByDate().subscribe( data => {

			this.listMoviesByDate = data.listMoviesByDate;
	  	}, err => { return false; });

		this.homeService.getMoviesByNote().subscribe( data => {

			this.listMoviesByNote = data.listMoviesByNote;
	  	}, err => {	return false; });

	  	this.homeService.getMoviesBySoon().subscribe( data => {

			this.listMoviesBySoon = data.listMoviesBySoon;
	  	}, err => {	return false; });

	  	this.listemoviesService.getMovies().subscribe( data => {

			this.listMovies = data.listMovies;
	  	}, err => { return false; });
  	}

	ngOnInit() {

		carousel();	

		this.listTest = [1,2,3,4,5,6];

		this.table = {

			test : {

				idLeft: "pointLeftLastArticle", idRight: "pointRightLastArticle", list: "listPanelLastArticle", counter: 1
			},
			test2 : {

				idLeft: "pointLeftLastSeries", idRight: "pointRightLastSeries", list: "listPanelLastSeries", counter: 1
			},
			test3 : {

				idLeft: "pointLeftLastMovies", idRight: "pointRightLastMovies", list: "listPanelLastMovies", counter: 1
			},
			test4 : {

				idLeft: "pointLeftBestArticle", idRight: "pointRightBestArticle", list: "listPanelBestArticle", counter: 1
			},
			test5 : {

				idLeft: "pointLeftBestSeries", idRight: "pointRightBestSeries", list: "listPanelBestSeries", counter: 1
			},
			test6 : {

				idLeft: "pointLeftBestMovies", idRight: "pointRightBestMovies", list: "listPanelBestMovies", counter: 1
			}
		};
	}

	listPanelToLeft(event) {

		for (let test in this.table) {

			if (this.table[test].idLeft == event.target.id) {

				if(this.table[test].counter > 1) {

					this.table[test].counter--;

					document.getElementById(this.table[test].list).style.transform = "translateX(" + ((this.table[test].counter - 1) * 172 * -1) + "px)";
				}	
			}
		}		
	}

	listPanelToRight(event) {

		for (let test in this.table) {

			if (this.table[test].idRight == event.target.id) {

				if(this.table[test].counter < this.listTest.length ) {

					document.getElementById(this.table[test].list).style.transform = "translateX(" + (this.table[test].counter * 172 * -1) + "px)";
					
					this.table[test].counter++;
				}	
				else if(this.table[test].counter == this.listTest.length) {

					document.getElementById(this.table[test].list).style.transform = "translateX(0px)";
					
					this.table[test].counter = 1;
				}
			}
		}
	}

	hideCookies() {

		this.appComponent.cookies = false;

		localStorage.setItem('cookies', 'false');
	}
}