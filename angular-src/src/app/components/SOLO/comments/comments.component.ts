import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute, Params } from '@angular/router';
import { FlashMessagesService } from 'angular2-flash-messages';

import { MovieService } from '../../../services/SOLO/movie.service';
import { ArticleService } from '../../../services/SOLO/article.service';
import { SerieService } from '../../../services/SOLO/serie.service';
import { AddarticleService } from '../../../services/addarticle.service';
import { ProfilService } from '../../../services/profil.service';

import { CommentService } from '../../../services/comment.service';

import * as $ from "jquery";

@Component({
  selector: 'app-comments',
  templateUrl: './comments.component.html',
  styleUrls: ['./comments.component.css']
})
export class CommentsComponent implements OnInit {

	idUser: number;
	userData: any;
	listcomments: any[];
	listcommentsall: any[];
	id:number;
	url:string;
	fk_idauteur:number;
	lastname: string;
	firstname: string;
	titlecomment: string;
	contentcomment: string;

	constructor(
		private profilService: ProfilService,
		private commentService: CommentService,
		private activatedRoute: ActivatedRoute,
		private articleService: ArticleService,
		private movieService: MovieService,
		private addarticleService: AddarticleService,
  		private flashMessages: FlashMessagesService,
		private serieService: SerieService,
    	private router: Router
	) { }

	ngOnInit() {

		// Get data user
		this.profilService.dataUser().subscribe( data => {

  			this.idUser = data.userData[0].iduser;
	      	this.userData = data.userData;
	  	}, 
	  	err => { return false; });

		// Get id Ressource
		this.activatedRoute.queryParams.subscribe((params: Params) => {

	    	this.id = params['id'];
	    });

		// Get url Page
	    this.url = window.location.pathname ;

	    // Get list
	    let idObject = { id: this.id }

	    if(this.url == '/article'){

	    	this.commentService.getlistCommentArticle(idObject).subscribe( data => {

				this.getListComment(data);

		  	}, err => { return false; });
	    }

	    if(this.url == '/series'){

	    	this.commentService.getlistCommentSerie(idObject).subscribe( data => {

				this.getListComment(data);

		  	}, err => { return false; });
	    }

	    if(this.url == '/movie'){

	    	this.commentService.getlistCommentMovie(idObject).subscribe( data => {

				this.getListComment(data);

		  	}, err => { return false; });
	    }
	}

	getListComment(data) {

		this.listcomments = data.listcomments;

		this.listcommentsall = [];

		// Username
		let i = 0;
		for ( let comment in this.listcomments ){
			
			// get id of comment author
			this.fk_idauteur = this.listcomments[i].fk_idauteur; 

			// Username

			const idObject2 = { _id: this.fk_idauteur }

			// use function of articleService with comment author id
			this.articleService.getUsername(idObject2).subscribe( data => { 

				this.lastname = data.user[0].lastname;
				this.firstname = data.user[0].firstname;

				this.listcomments[i].lastname = this.lastname;
				this.listcomments[i].firstname = this.firstname;

				i++;

	  		}, err => { return false; });
		}
	}

	addComment() {

		const newComment = {
	        title: this.titlecomment,
	        content: this.contentcomment,
	        idUser: this.idUser,
	        id_Resource: this.id
	    }

	    // Vérification des champs de formulaire

    	let position = $(document).scrollTop() + 200;

		if(!this.commentService.checkChampsInscription(newComment)){

			this.flashMessages.show("Remplir tous les champs", {cssClass: 'flashfade alert-red', timeout: 3000 });
			$(".flash-message").css("top", position );
			return false;
		}


		// Ajout d'un nouvel comment //

		if(this.url == '/article'){

	    	this.commentService.addCommentArticle(newComment).subscribe(data => {

		    	position = 200;

				if(data.success){

					this.flashMessages.show("Ajout réussi", {cssClass: 'flashfade alert-blue', timeout: 3000 });
					$(".flash-message").css("top", position );
					location.reload();
				}
				else {

					this.flashMessages.show(data.msg, {cssClass: 'flashfade alert-red', timeout: 3000 });
					$(".flash-message").css("top", position );
				}
		    });
	    }

	    if(this.url == '/series'){

	    	this.commentService.addCommentSerie(newComment).subscribe(data => {

		    	position = 200;

				if(data.success){

					this.flashMessages.show("Ajout réussi", {cssClass: 'flashfade alert-blue', timeout: 3000 });
					$(".flash-message").css("top", position );
					location.reload();
				}
				else {

					this.flashMessages.show(data.msg, {cssClass: 'flashfade alert-red', timeout: 3000 });
					$(".flash-message").css("top", position );
				}
		    });
	    }

	    if(this.url == '/movie'){

	    	this.commentService.addCommentMovie(newComment).subscribe(data => {

		    	position = 200;

				if(data.success){

					this.flashMessages.show("Ajout réussi", {cssClass: 'flashfade alert-blue', timeout: 3000 });
					$(".flash-message").css("top", position );
					location.reload();
				}
				else {

					this.flashMessages.show(data.msg, {cssClass: 'flashfade alert-red', timeout: 3000 });
					$(".flash-message").css("top", position );
				}
		    });
	    }
	}

}
