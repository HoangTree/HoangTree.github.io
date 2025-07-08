let slidesIndex = 1; // Human-readable counter for slides
showSlides(slidesIndex);

function plusSlides(n){
    showSlides(slidesIndex += n);
}

function currentSlide(n){
    showSlides(slidesIndex = n);
}

function showSlides(n){

    // IMAGES
    let slides = document.getElementsByClassName("mySlides");
    let dots = document.getElementsByClassName("dot");

    if(n > slides.length){ // If n exceeds the number of slides
        slidesIndex = 1; // Wrap around to the first slide
    }

    if (n < 1){ // If n is less than 1
        slidesIndex = slides.length; // Wrap around to the last slide
    }

    for(let j = 0; j< slides.length; j++){
        slides[j].style.display = "none"; // Hide all slides
    }

    slides[slidesIndex - 1].style.display = "block"; // Show the current slide
    // DOTS
}