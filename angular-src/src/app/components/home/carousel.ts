export function carousel () {


	let counterSlide = 0;

	let slidesList = document.getElementsByClassName("mySlides") as HTMLCollectionOf<HTMLElement>;

	let carouselTimeout;

	function carouselToRight() {

		// hide all slides
		clearAll();

		// got on to next slide
		counterSlide++;

		// if at the end of the array go back to 1° slide 
		if (counterSlide > slidesList.length) {

			counterSlide = 1;
		};

		// display current block
		slidesList[counterSlide - 1].style.display = "block";

		// initialise timeout
		carouselTimeout = setTimeout(carouselToRight, 4000);

		// firstPoint
		document.getElementById("firstpoint").onclick = (e) => {

			clearTimeout(carouselTimeout);

			clearAll();

			counterSlide = 1;

			slidesList[counterSlide - 1].style.display = "block";

			carouselTimeout = setTimeout(carouselToRight, 6000);
		}

		document.getElementById("secondpoint").onclick = (e) => {

			clearTimeout(carouselTimeout);

			clearAll();

			counterSlide = 2;

			slidesList[counterSlide - 1].style.display = "block";

			carouselTimeout = setTimeout(carouselToRight, 6000);
		}

		document.getElementById("thirdpoint").onclick = (e) => {

			clearTimeout(carouselTimeout);

			clearAll();

			counterSlide = 3;

			slidesList[counterSlide - 1].style.display = "block";

			carouselTimeout = setTimeout(carouselToRight, 6000);
		}
	}

	function carouselToLeft() {

		// if 1° slide then go to counterSlide to last slide
		if (counterSlide == 1) {

			counterSlide = slidesList.length + 1;
		};

		clearAll();

		// got back to previous slide
		counterSlide--;

		// display current block
		slidesList[counterSlide - 1].style.display = "block";

		carouselTimeout = setTimeout(carouselToRight, 4000);
	}	

	carouselToRight();


	function clearAll() {

		for (let i = 0 ; i < slidesList.length ; i++) {

			slidesList[i].style.display = "none";  
		}
	}

	// Listeners//

		// rightBtn
		document.getElementById("rightBtnPanel").onclick = () => {

			clearTimeout(carouselTimeout);

			carouselToRight();	
		}

		// leftBtn
		document.getElementById("leftBtnPanel").onclick = () => {

			clearTimeout(carouselTimeout);

			carouselToLeft();
		}
}