import { Component, OnInit } from '@angular/core';
import { carousel } from './carousel';
import { Router } from '@angular/router';

import { HomeService } from '../../services/home.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

	listTest:number[];
	table:any;
	listArticles:object[];

	constructor(
		private homeService: HomeService,
  		private router: Router
  	) { }

	ngOnInit() {

		// listArticles
		this.homeService.getDonneesByDate().subscribe( data => {

			this.listArticles = data.listArticles;
  			console.log(data.listArticles);
  			console.log((data.listArticles).length);
	  	}, 
	  	err => {

	  		return false;
	  	});

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

					document.getElementById(this.table[test].list).style.transform = "translateX(" + ((this.table[test].counter - 1) * 170 * -1) + "px)";
				}	
			}
		}		
	}

	listPanelToRight(event) {

		for (let test in this.table) {

			if (this.table[test].idRight == event.target.id) {

				if(this.table[test].counter < this.listTest.length ) {

					document.getElementById(this.table[test].list).style.transform = "translateX(" + (this.table[test].counter * 170 * -1) + "px)";
					
					this.table[test].counter++;
				}	
				else if(this.table[test].counter == this.listTest.length) {

					document.getElementById(this.table[test].list).style.transform = "translateX(0px)";
					
					this.table[test].counter = 1;
				}
			}
		}
	}
}