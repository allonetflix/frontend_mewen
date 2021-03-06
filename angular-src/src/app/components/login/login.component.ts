import { Component, OnInit } from '@angular/core';
import { FlashMessagesService } from 'angular2-flash-messages';
import { Router } from '@angular/router';

import { LoginService } from '../../services/login.service';

import * as $ from "jquery";


@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

	pseudo: string;
    password: string;

    compareDate: any = 17;
    birthDay: Date;
	p_agreement:string = "true";
	rgpdUser: boolean;

	constructor(
		private loginService: LoginService,
  		private flashMessages: FlashMessagesService,
    	private router: Router
    ) { }

	ngOnInit() {
	}

	loginSubmit() { 

		const entUser = {
	        pseudo: this.pseudo,
	        password: this.password
    	}

    	// Vérification des champs de formulaire

    	let position = $(document).scrollTop() + 200;

		if(!this.loginService.checkChampsInscription(entUser)){

			this.flashMessages.show("Remplir tous les champs", {cssClass: 'flashfade alert-red', timeout: 3000 });
			$(".flash-message").css("top", position );
			return false;
		}

		this.loginService.loginUser(entUser).subscribe(data => {

	  		if (data.success) {

	  			this.loginService.saveUserData(data.token, data.userData);

	  			this.flashMessages.show("Vous êtes connecté", {cssClass: 'flashfade alert-blue', timeout: 3000});
	  			$(".flash-message").css("top", position );
	  			this.router.navigate(['/']);

	  		}
	  		else {

	  			this.flashMessages.show(data.msg, {cssClass: 'flashfade alert-red', timeout: 3000});
	  			$(".flash-message").css("top", position );
	  			this.router.navigate(['/login']);

	  		}

	  	});

	}

	checkDate() {

		const today16 = new Date();

		const birthday = new Date(this.birthDay);

		this.compareDate = today16.getFullYear() - birthday.getFullYear();

		console.log(this.compareDate);

		if(this.compareDate < 16 && this.rgpdUser == true) { this.p_agreement = "no" }
			else { this.p_agreement = "yes" }
	}

}
