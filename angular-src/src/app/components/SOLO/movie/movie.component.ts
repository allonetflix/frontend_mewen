import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute, Params } from '@angular/router';

import { MovieService } from '../../../services/SOLO/movie.service';
import { ProfilService } from '../../../services/profil.service';

@Component({
  selector: 'app-movie',
  templateUrl: './movie.component.html',
  styleUrls: ['./movie.component.css']
})
export class MovieComponent implements OnInit {

	idUser: number;
	userData: any;
	movie:object;
	id:number;
	likedRessource:boolean;

	constructor(
		private profilService: ProfilService,
		private activatedRoute: ActivatedRoute,
		private movieService: MovieService
	) { 

		// Get Id movie

		this.activatedRoute.queryParams.subscribe((params: Params) => {

	    	this.id = params['id'];
	    });

	    // Get Profil User 

		this.profilService.dataUser().subscribe( data => {

  			this.idUser = data.userData[0].iduser;
	      	this.userData = data.userData;

	      	// Check Liked

		  	const object = {
		        fk_idmovie: this.id,
		        fk_iduserlike: this.idUser 
		    }

		  	this.movieService.selectLikedMovie(object).subscribe( data => {

		  		if(data.success == true) { this.likedRessource = true }
		  		else { this.likedRessource = false }

	  			return true;
		  	}, 
		  	err => { return false; });
	  	}, 
	  	err => { return false; });

		// Get Movie

		const idObject = { _id: this.id	}

		this.movieService.getMovie(idObject).subscribe( data => {

			this.movie = data.movie[0];

	  	}, err => { return false; });
	}

	ngOnInit() {

	}

	likeIt() {

		// console.log("In Like it likeressource : " + this.likedRessource);

		const object = {
	        fk_idmovie: this.id,
	        fk_iduserlike: this.idUser 
	    }

		if(this.likedRessource == true) {

			this.movieService.deleteLikedMovie(object).subscribe( data => {

				location.reload();

				return true;

			}, err => { return false; });
		}

		else if(this.likedRessource == false) {

			this.movieService.insertLikedMovie(object).subscribe( data => {

				location.reload();

				return true;

			}, err => { return false; });
		}
	}
}
