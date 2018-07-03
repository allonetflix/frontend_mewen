import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-comments',
  templateUrl: './comments.component.html',
  styleUrls: ['./comments.component.css']
})
export class CommentsComponent implements OnInit {

	listcomments: number[];

	constructor() { }

	ngOnInit() {

		this.listcomments = [1,2,3,4];
	}

}
