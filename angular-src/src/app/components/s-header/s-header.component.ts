import { Component, OnInit } from '@angular/core';

import { LoginService } from '../../services/login.service';
import { ProfilService } from '../../services/profil.service';

import { FlashMessagesService } from 'angular2-flash-messages';
import { Router } from '@angular/router';

import * as $ from "jquery";

@Component({
  selector: 'app-s-header',
  templateUrl: './s-header.component.html',
  styleUrls: ['./s-header.component.css']
})
export class SHeaderComponent implements OnInit {

	isClickedS_Searchbar:boolean = true;

	constructor(
		private profilService: ProfilService,
		private loginService: LoginService,
  		private flashMessages: FlashMessagesService,
    	private router: Router
    ) { }

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

	logoutUser(){

		let position = $(document).scrollTop() + 200;

		this.loginService.logoutUser();
		this.flashMessages.show("Vous êtes déconnecté", {cssClass: 'flashfade alert-blue', timeout: 3000});
	}
}
