import { Component, OnInit } from '@angular/core';
import { FlashMessagesService } from 'angular2-flash-messages';
import { Router } from '@angular/router';

import { ProfilService } from '../../services/profil.service';

import * as $ from "jquery";

@Component({
  selector: 'app-profil',
  templateUrl: './profil.component.html',
  styleUrls: ['./profil.component.css']
})
export class ProfilComponent implements OnInit {

	idUser: number;
	userData: any;

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
    rgpd: boolean

	constructor(
		private profilService: ProfilService,
  		private flashMessages: FlashMessagesService,
    	private router: Router
    ) { }

	ngOnInit() {


		this.profilService.dataUser().subscribe( data => {

  			this.idUser = data.userData[0].iduser;
	      	this.userData = data.userData;
	  	}, 
	  	err => { return false; });


	}

	updateSubmit(){

		const updUser = {
			id: this.idUser,
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

		if(!this.profilService.checkChampsInscription(updUser)){

			this.flashMessages.show("Remplir tous les champs", {cssClass: 'flashfade alert-red', timeout: 3000 });
			$(".flash-message").css("top", position );
			return false;
		}

		if(!this.profilService.checkChampsEmail(updUser.email)){

			this.flashMessages.show("Entrer un format d'email correct", {cssClass: 'flashfade alert-red', timeout: 3000 });
			$(".flash-message").css("top", position );
			return false;
		}

		// Inscription d'un nouvel utilisateur //

	    this.profilService.updateUser(updUser).subscribe(data => {

	    	let position = $(document).scrollTop() + 200;

			if(data.success){

				this.flashMessages.show("Mise à jour réussie", {cssClass: 'flashfade alert-blue', timeout: 3000 });
				$(".flash-message").css("top", position );
				this.router.navigate(['/']);
			}
			else {

				this.flashMessages.show(data.msg, {cssClass: 'flashfade alert-red', timeout: 3000 });
				$(".flash-message").css("top", position );
				this.router.navigate(['/profil']);
			}
	    });
	}
}
