import { Component, OnInit, NgZone } from '@angular/core';

import { LoginService } from '../../services/login.service';
import { ProfilService } from '../../services/profil.service';

import { FlashMessagesService } from 'angular2-flash-messages';
import { Router } from '@angular/router';

import * as $ from "jquery";

@Component({
  selector: 'app-t-header',
  templateUrl: './t-header.component.html',
  styleUrls: ['./t-header.component.css']
})
export class THeaderComponent implements OnInit {

	isClickedNav:boolean;
	isClickedMyspace:boolean;
	isClickedSearchbar:boolean = true;

	constructor(
		private profilService: ProfilService,
		private loginService: LoginService,
  		private flashMessages: FlashMessagesService,
    	private router: Router
    ) { }

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

	logoutUser(){

		let position = $(document).scrollTop() + 200;

		this.loginService.logoutUser();
		this.flashMessages.show("Vous êtes déconnecté", {cssClass: 'flashfade alert-blue', timeout: 3000});
	}

}
