import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute, Params } from '@angular/router';

import { ArticleService } from '../../../services/SOLO/article.service';

@Component({
  selector: 'app-article',
  templateUrl: './article.component.html',
  styleUrls: ['./article.component.css']
})
export class ArticleComponent implements OnInit {

	listcomments: number[];
	article:object;
	id:number;

	constructor(
		private activatedRoute: ActivatedRoute,
		private articleService: ArticleService
	) { 

		this.activatedRoute.queryParams.subscribe((params: Params) => {

	    	this.id = params['id'];
	    });

		// Article

		const idObject = { _id: this.id	}

		this.articleService.getArticle(idObject).subscribe( data => {

			this.article = data.article[0];
			console.log(this.article);

	  	}, err => { return false; });
	}

	ngOnInit() {

		this.listcomments = [1,2,3,4];
	}
}
