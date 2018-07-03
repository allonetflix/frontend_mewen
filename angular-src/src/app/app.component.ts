import { Component, NgZone } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {

	isTablet:boolean;
	isComputer:boolean;
	isScrolled:boolean = false;

	title = 'app';

	constructor(ngZone:NgZone) {

		// console.log(this.isScrolled);

		ngZone.run(() => {

			this.isTablet = ( window.innerWidth < 768 ) ? true : false;
			this.isComputer = ( window.innerWidth > 768 ) ? true : false;
		});

		window.onresize = () => {

	        ngZone.run(() => {

	            this.isTablet = ( window.innerWidth < 768 ) ? true : false;
	            this.isComputer = ( window.innerWidth > 768 ) ? true : false;
	            // console.log(this.isTablet);

	            // Correct modif style header panels
	            if ( window.innerWidth > 768 ) 
	            	document.documentElement.style.overflowY = 'visible';
        	});        	
	    };

	    window.onscroll = () => { 

	    	this.isScrolled = ( window.scrollY > 100 ) ? true : false;
	    	// console.log(this.isScrolled);
	    }
	}
}