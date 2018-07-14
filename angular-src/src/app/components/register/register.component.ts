import { Component, OnInit } from '@angular/core';
import { FlashMessagesService } from 'angular2-flash-messages';
import { Router } from '@angular/router';

import { RegisterService } from '../../services/register.service';

import * as $ from "jquery";

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {

	pseudo: string;
    email: string;
    password: string;
    lastName: string;
    firstName: string;
    nbStreet: number;
    street: string;
    city: string;
    postalCode: number;
    sex: string; 
    birthDay: any;
    inscriptionDate: any;
    rgpd: boolean = true;
    p_agreement:any;

    compareDate: any = 17;

	constructor(
		private registerService: RegisterService,
  		private flashMessages: FlashMessagesService,
    	private router: Router
	) { }

	ngOnInit() { }

	registerSubmit() {

		const newUser = {
	        pseudo: this.pseudo,
	        email: this.email,
	        password: this.password,
	        lastName: this.lastName,
	        firstName: this.firstName,
	        nbStreet: this.nbStreet,
	        street: this.street,
	        city: this.city,
	        postalCode: this.postalCode, 
	        sex: this.sex, 
	        birthDay: this.birthDay,
	        rgpd: this.rgpd
    	}

    	// Vérification des champs de formulaire

    	let position = $(document).scrollTop() + 200;

		if(!this.registerService.checkChampsInscription(newUser)){

			this.flashMessages.show("Remplir tous les champs", {cssClass: 'flashfade alert-red', timeout: 3000 });
			$(".flash-message").css("top", position );
			return false;
		}

		if(!this.registerService.checkChampsEmail(newUser.email)){

			this.flashMessages.show("Entrer un format d'email correct", {cssClass: 'flashfade alert-red', timeout: 3000 });
			$(".flash-message").css("top", position );
			return false;
		}

		if( this.p_agreement == undefined || this.p_agreement == "" ){

			this.flashMessages.show("Remplir tous les champs", {cssClass: 'flashfade alert-red', timeout: 3000 });
			$(".flash-message").css("top", position );
			return false;
		}

		if( this.p_agreement == "no" ){

			this.flashMessages.show("L'accord parental ne vous permet pas de modifier vos données", {cssClass: 'flashfade alert-red', timeout: 3000 });
			$(".flash-message").css("top", position );
			return false;
		}

		// Inscription d'un nouvel utilisateur //

	    this.registerService.registerUser(newUser).subscribe(data => {

	    	position = 200;

			if(data.success){

				this.flashMessages.show("Inscription réussie", {cssClass: 'flashfade alert-blue', timeout: 3000 });
				$(".flash-message").css("top", position );
				this.router.navigate(['/login']);
			}
			else {

				this.flashMessages.show(data.msg, {cssClass: 'flashfade alert-red', timeout: 3000 });
				$(".flash-message").css("top", position );
				this.router.navigate(['/register']);
			}

	    });
	}

	checkDate() {

		const today16 = new Date();

		const birthday = new Date(this.birthDay);

		this.compareDate = today16.getFullYear() - birthday.getFullYear();

		console.log(this.compareDate);

		if(this.compareDate < 16 && this.rgpd == true) { this.p_agreement = "no" }
			else { this.p_agreement = "yes" }
	}
}
