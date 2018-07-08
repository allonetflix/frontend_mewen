import { Component, OnInit } from '@angular/core';
import { FlashMessagesService } from 'angular2-flash-messages';
import { Router } from '@angular/router';

import { AddarticleService } from '../../services/addarticle.service';
import { ProfilService } from '../../services/profil.service';

import * as $ from "jquery";

@Component({
  selector: 'app-addarticle',
  templateUrl: './addarticle.component.html',
  styleUrls: ['./addarticle.component.css']
})
export class AddarticleComponent implements OnInit {

	idUser: number;
	userData: any;

	title: string;
    synopsis: string;
    content: string;
    img: string;

	constructor(
		private profilService: ProfilService,
		private addarticleService: AddarticleService,
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

	addArticle() {

		const newArticle = {
	        title: this.title,
	        synopsis: this.synopsis,
	        content: this.content,
	        img: this.img,
	        idUser: this.idUser
	    }

	    // Vérification des champs de formulaire

    	let position = $(document).scrollTop() + 200;

		if(!this.addarticleService.checkChampsInscription(newArticle)){

			this.flashMessages.show("Remplir tous les champs", {cssClass: 'flashfade alert-red', timeout: 3000 });
			$(".flash-message").css("top", position );
			return false;
		}

		// Ajout d'un nouvel article //

	    this.addarticleService.addArticle(newArticle).subscribe(data => {

	    	position = 200;

			if(data.success){

				this.flashMessages.show("Ajout réussi", {cssClass: 'flashfade alert-blue', timeout: 3000 });
				$(".flash-message").css("top", position );
				this.router.navigate(['/listearticles']);
			}
			else {

				this.flashMessages.show(data.msg, {cssClass: 'flashfade alert-red', timeout: 3000 });
				$(".flash-message").css("top", position );
				this.router.navigate(['/addarticle']);
			}
	    });
 	}
}
