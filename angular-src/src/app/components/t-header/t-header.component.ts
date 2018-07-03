import { Component, OnInit, NgZone } from '@angular/core';

@Component({
  selector: 'app-t-header',
  templateUrl: './t-header.component.html',
  styleUrls: ['./t-header.component.css']
})
export class THeaderComponent implements OnInit {

	isClickedNav:boolean;
	isClickedMyspace:boolean;
	isClickedSearchbar:boolean = true;

	constructor() { }

	ngOnInit() {
	}

	onClickNav() {

		// hide the other panel
		this.isClickedMyspace = ( this.isClickedMyspace == true ) ? false : false;

		this.isClickedNav = !this.isClickedNav;
		// console.log(this.isClickedNav);

		// hid scrollBar
		document.documentElement.style.overflowY = ( this.isClickedNav == true ) ? 'hidden' : 'visible';
	}

	onClickMyspace() {

		this.isClickedNav = ( this.isClickedNav == true ) ? false : false;

		this.isClickedMyspace = !this.isClickedMyspace;
		// console.log(this.isClickedMyspace);

		// hide the other panel
		document.documentElement.style.overflowY = ( this.isClickedMyspace == true ) ? 'hidden' : 'visible';
	}

	onClickSearchBar() {

		this.isClickedSearchbar = !this.isClickedSearchbar;
		console.log(this.isClickedSearchbar);


		(<any>document.querySelector("#t_searchbar input")).style.transform = (this.isClickedSearchbar == true)  ? 'translateX(100%)' : 'translateX(4%)';
	}



}
