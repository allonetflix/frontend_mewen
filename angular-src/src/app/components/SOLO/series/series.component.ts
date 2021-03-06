import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute, Params } from '@angular/router';
import { FlashMessagesService } from 'angular2-flash-messages';

import { SerieService } from '../../../services/SOLO/serie.service';
import { ProfilService } from '../../../services/profil.service';

import * as $ from "jquery";

@Component({
  selector: 'app-series',
  templateUrl: './series.component.html',
  styleUrls: ['./series.component.css']
})
export class SeriesComponent implements OnInit {

	idUser: number;
	userData: any;
	serie:object;
	id:number;
	likedRessource:boolean;
	notedRessource:boolean;
	note: number;
	noteurl: string;
	noteUser:number;

	constructor(
		private profilService: ProfilService,
		private activatedRoute: ActivatedRoute,
		private serieService: SerieService,
  		private flashMessages: FlashMessagesService,
		private router: Router
	) { 

		// Get Id serie

		this.activatedRoute.queryParams.subscribe((params: Params) => {

	    	this.id = params['id'];
	    });

	    // Get Profil User 

		this.profilService.dataUser().subscribe( data => {

  			this.idUser = data.userData[0].iduser;
	      	this.userData = data.userData;

	      	// Check Liked

		  	const object = {
		        fk_idserie: this.id,
		        fk_iduserlike: this.idUser 
		    }

		  	this.serieService.selectLikedSerie(object).subscribe( data => {

		  		if(data.success == true) { this.likedRessource = true }
		  		else { this.likedRessource = false }

	  			return true;
		  	}, 
		  	err => { return false; });

		  	// Check Noted

		  	const object2 = {

		        fk_idserie: this.id,
		        fk_idusernote: this.idUser 
		    }

		  	this.serieService.selectNotedSerie(object2).subscribe( data => {

		  		if(data.success == true) { 

		  			this.noteUser = data.serienoted[0].note;
		  			this.testNote(); 
		  			this.notedRessource = true ;
		  		}
		  		else { 

		  			this.noteurl = "../../../../assets/stars/0_stars.png";
		  			this.notedRessource = false;
		  		}

	  			return true;
		  	}, 
		  	err => { return false; });

	  	}, 
	  	err => { return false; });

		// Get Serie

		const idObject = { _id: this.id	}

		this.serieService.getSerie(idObject).subscribe( data => {

			this.serie = data.serie[0];
			this.note = data.serie[0].note;

	  	}, err => { return false; });
	}

	ngOnInit() {

	}

	likeIt() {

		const object = {
	        fk_idserie: this.id,
	        fk_iduserlike: this.idUser 
	    }

		if(this.likedRessource == true) {

			this.serieService.deleteLikedSerie(object).subscribe( data => {

				location.reload();

				return true;

			}, err => { return false; });
		}

		else if(this.likedRessource == false) {

			this.serieService.insertLikedSerie(object).subscribe( data => {

				location.reload();

				return true;

			}, err => { return false; });
		}
	}

	noteStar(numberStar) {

		let position = $(document).scrollTop() + 200;

		if(this.notedRessource == true){

			this.flashMessages.show("Vous avez déjà noté cette série", {cssClass: 'flashfade alert-orange', timeout: 3000 });
			$(".flash-message").css("top", position );
			return false;
		}
		else {

			this.note = Math.round((this.note + numberStar) / 2);

			// update note of ressource

			const object = {

				id: this.id,
				note: this.note
			}

			this.serieService.updateNoteSerie(object).subscribe( data => {

				return true;

			}, err => { return false; });

			// insert in note_serie

			const object2 = {
		        fk_idserie: this.id,
		        fk_idusernote: this.idUser,
		        note: numberStar
		    }

			this.serieService.insertNotedSerie(object2).subscribe( data => {

				location.reload();

				return true;

			}, err => { return false; });
		}
	}

	enterNote(number) {

		if(this.notedRessource == false){

			if (number == null || number == 0) {

				this.noteurl = "../../../../assets/stars/0_stars.png";
			}
			else if (number == 1) {

				this.noteurl = "../../../../assets/stars/1_stars.png";
			}
			else if (number == 2) {

				this.noteurl = "../../../../assets/stars/2_stars.png";
			}
			else if (number == 3) {

				this.noteurl = "../../../../assets/stars/3_stars.png";
			}
			else if (number == 4) {

				this.noteurl = "../../../../assets/stars/4_stars.png";
			}
			else if (number == 5) {

				this.noteurl = "../../../../assets/stars/5_stars.png";
			}
		}
	}

	leaveNote(number) {

		if(this.notedRessource == false){

			this.testNote();
		}
	}

	testNote() {

		// Attribute note

		if (this.noteUser == null || this.noteUser == 0) {

			this.noteurl = "../../../../assets/stars/0_stars.png";
		}
		else if (this.noteUser == 1) {

			this.noteurl = "../../../../assets/stars/1_stars.png";
		}
		else if (this.noteUser == 2) {

			this.noteurl = "../../../../assets/stars/2_stars.png";
		}
		else if (this.noteUser == 3) {

			this.noteurl = "../../../../assets/stars/3_stars.png";
		}
		else if (this.noteUser == 4) {

			this.noteurl = "../../../../assets/stars/4_stars.png";
		}
		else if (this.noteUser == 5) {

			this.noteurl = "../../../../assets/stars/5_stars.png";
		}
	}
}
