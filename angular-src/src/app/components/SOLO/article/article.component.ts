import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute, Params } from '@angular/router';
import { FlashMessagesService } from 'angular2-flash-messages';

import { ArticleService } from '../../../services/SOLO/article.service';
import { ProfilService } from '../../../services/profil.service';

import * as $ from "jquery";

@Component({
  selector: 'app-article',
  templateUrl: './article.component.html',
  styleUrls: ['./article.component.css']
})

export class ArticleComponent implements OnInit {

	idUser: number;
	userData: any;
	article:any;
	fk_idauteur:number;
	lastname: string;
	firstname: string;
	id:number;
	likedRessource:boolean;
	notedRessource:boolean;
	note: number;
	noteurl: string;
	noteUser:number;

	constructor(
		private profilService: ProfilService,
		private activatedRoute: ActivatedRoute,
		private articleService: ArticleService,
  		private flashMessages: FlashMessagesService,
		private router: Router
	) { 

		// Get Id article

		this.activatedRoute.queryParams.subscribe((params: Params) => {

	    	this.id = params['id'];
	    });

		// Get Profil User 

		this.profilService.dataUser().subscribe( data => {

  			this.idUser = data.userData[0].iduser;
	      	this.userData = data.userData;

	      	// Check Liked

		  	const object = {
		        fk_idarticle: this.id,
		        fk_iduserlike: this.idUser 
		    }

		  	this.articleService.selectLikedArticle(object).subscribe( data => {

		  		if(data.success == true) { this.likedRessource = true }
		  		else { this.likedRessource = false }

	  			return true;
		  	}, 
		  	err => { return false; });

		  	// Check Noted

		  	const object2 = {

		        fk_idarticle: this.id,
		        fk_idusernote: this.idUser 
		    }

		  	this.articleService.selectNotedArticle(object2).subscribe( data => {

		  		if(data.success == true) { 

		  			this.noteUser = data.articlenoted[0].note;
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

		// Get Article

		const idObject = { _id: this.id	}

		this.articleService.getArticle(idObject).subscribe( data => {

			this.article = data.article[0];
			this.fk_idauteur = data.article[0].fk_idauteur;
			this.note = data.article[0].note;

			// Get author of article

			const idObject2 = { _id: this.fk_idauteur }

			this.articleService.getUsername(idObject2).subscribe( data => {

				this.lastname = data.user[0].lastname;
				this.firstname = data.user[0].firstname;

	  		}, err => { return false; });

	  	}, err => { return false; });	
	}

	ngOnInit() {

				
	}

	likeIt() {

		const object = {
	        fk_idarticle: this.id,
	        fk_iduserlike: this.idUser 
	    }

		if(this.likedRessource == true) {

			this.articleService.deleteLikedArticle(object).subscribe( data => {

				location.reload();

				return true;

			}, err => { return false; });
		}

		else if(this.likedRessource == false) {

			this.articleService.insertLikedArticle(object).subscribe( data => {

				location.reload();

				return true;

			}, err => { return false; });
		}
	}

	noteStar(numberStar) {

		let position = $(document).scrollTop() + 200;

		if(this.notedRessource == true){

			this.flashMessages.show("Vous avez déjà noté cet article", {cssClass: 'flashfade alert-orange', timeout: 3000 });
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

			this.articleService.updateNoteArticle(object).subscribe( data => {

				return true;

			}, err => { return false; });

			// insert in note_article

			const object2 = {
		        fk_idarticle: this.id,
		        fk_idusernote: this.idUser,
		        note: numberStar
		    }

			this.articleService.insertNotedArticle(object2).subscribe( data => {

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
