import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute, Params } from '@angular/router';

import { SerieService } from '../../../services/SOLO/serie.service';
import { ProfilService } from '../../../services/profil.service';

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

	constructor(
		private profilService: ProfilService,
		private activatedRoute: ActivatedRoute,
		private serieService: SerieService
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
	  	}, 
	  	err => { return false; });

		// Get Serie

		const idObject = { _id: this.id	}

		this.serieService.getSerie(idObject).subscribe( data => {

			this.serie = data.serie[0];

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
}
