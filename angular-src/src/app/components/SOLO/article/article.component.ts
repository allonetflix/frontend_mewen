import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-article',
  templateUrl: './article.component.html',
  styleUrls: ['./article.component.css']
})
export class ArticleComponent implements OnInit {

	listcomments: number[];

	constructor() { }

	ngOnInit() {

		this.listcomments = [1,2,3,4];
	}
}
