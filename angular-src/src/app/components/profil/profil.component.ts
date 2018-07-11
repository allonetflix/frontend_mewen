import { Component, OnInit } from '@angular/core';
import { FlashMessagesService } from 'angular2-flash-messages';
import { Router } from '@angular/router';
import { MomentModule } from 'angular2-moment/moment.module';

import { ProfilService } from '../../services/profil.service';

import * as $ from "jquery";
import * as moment from "moment";

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
    birthDay: Date;
    inscriptionDate: any;
    rgpd: boolean;
    p_agreement:string = "true";
    rgpdUser: boolean;

    compareDate: any = 17;

	constructor(
		private profilService: ProfilService,
  		private flashMessages: FlashMessagesService,
    	private router: Router
    ) { }

	ngOnInit() {


		this.profilService.dataUser().subscribe( data => {

  			this.idUser = data.userData[0].iduser;
	      	this.userData = data.userData;

  			this.rgpdUser = data.userData[0].rgpd;
		console.log("this.rgpdUser : " + this.rgpdUser);
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

    	console.log("PAGREEMENT : " + this.p_agreement);

    	// Vérification des champs de formulaire

    	let position = $(document).scrollTop() + 200;

		if(!this.profilService.checkChampsInscription(updUser)){

			this.flashMessages.show("Remplir tous les champs", {cssClass: 'flashfade alert-red', timeout: 3000 });
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

	deleteDataUser() {

		const object = {

			id: this.idUser
		}

		this.profilService.deleteDataUser(object).subscribe(data => {

	    	let position = $(document).scrollTop() + 200;

			if(data.success){

				this.flashMessages.show("Suppression des données personnelles", {cssClass: 'flashfade alert-blue', timeout: 3000 });
				$(".flash-message").css("top", position );
				this.router.navigate(['/']);
			}
			else {

				this.flashMessages.show("Échec de la suppression des données personnelles", {cssClass: 'flashfade alert-red', timeout: 3000 });
				$(".flash-message").css("top", position );
				this.router.navigate(['/profil']);
			}
	    });
	}

	deleteUser() {

		const object = {

			id: this.idUser
		}

		this.profilService.deleteUser(object).subscribe(data => {

	    	let position = $(document).scrollTop() + 200;

			if(data.success){

				this.flashMessages.show("Suppression du compte réussie", {cssClass: 'flashfade alert-blue', timeout: 3000 });
				$(".flash-message").css("top", position );
				this.router.navigate(['/']);
			}
			else {

				this.flashMessages.show("Échec de la suppression de compte", {cssClass: 'flashfade alert-red', timeout: 3000 });
				$(".flash-message").css("top", position );
				this.router.navigate(['/profil']);
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
