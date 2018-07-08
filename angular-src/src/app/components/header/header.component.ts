import { Component, OnInit } from '@angular/core';

import { LoginService } from '../../services/login.service';
import { ProfilService } from '../../services/profil.service';

import { FlashMessagesService } from 'angular2-flash-messages';
import { Router } from '@angular/router';

import * as $ from "jquery";

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {

	constructor(
		private profilService: ProfilService,
		private loginService: LoginService,
  		private flashMessages: FlashMessagesService,
    	private router: Router
  	) { }

	ngOnInit() { }


	logoutUser(){

		let position = $(document).scrollTop() + 200;

		this.loginService.logoutUser();
		this.flashMessages.show("Vous êtes déconnecté", {cssClass: 'flashfade alert-blue', timeout: 3000});
	}
}
