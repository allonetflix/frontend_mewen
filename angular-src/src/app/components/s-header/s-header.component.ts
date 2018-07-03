import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-s-header',
  templateUrl: './s-header.component.html',
  styleUrls: ['./s-header.component.css']
})
export class SHeaderComponent implements OnInit {

	isClickedS_Searchbar:boolean = true;

	constructor() { }

	ngOnInit() {

		setTimeout(function(){ 

			document.getElementById("s_header").classList.add("slideDown");
		}, 100);
	}

	onClickS_SearchBar() {

		this.isClickedS_Searchbar = !this.isClickedS_Searchbar;
		console.log(this.isClickedS_Searchbar);

		(<any>document.querySelector("#s_searchbar input")).style.transform = (this.isClickedS_Searchbar == true)  ? 'translateX(150%)' : 'translateX(0%)';
	}
}
