let currentSlide = 0;
let slides = document.getElementsByClassName("slide");
let slideshowInterval = null;
let isSlideshowRunning = false;

// Functie om de juiste dia te tonen
function showSlide(index) {
  for (let i = 0; i < slides.length; i++) {
    slides[i].style.display = "none";
  }
  slides[index].style.display = "block";
}

// Ga naar de volgende dia
function nextSlide() {
  currentSlide = (currentSlide + 1) % slides.length;
  showSlide(currentSlide);
}

// Ga naar de vorige dia
function prevSlide() {
  currentSlide = (currentSlide - 1 + slides.length) % slides.length;
  showSlide(currentSlide);
}

// Start of stop de slideshow
function toggleSlideshow() {
  if (isSlideshowRunning) {
    clearInterval(slideshowInterval);
    isSlideshowRunning = false;
  } else {
    slideshowInterval = setInterval(nextSlide, 3000); // Pas de snelheid van de slideshow aan als gewenst
    isSlideshowRunning = true;
  }
}

// Luister naar toetsaanslagen
document.addEventListener("keydown", function (event) {
  if (event.key === "ArrowRight") {
    // Naar de volgende dia
    nextSlide();
  } else if (event.key === "ArrowLeft") {
    // Naar de vorige dia
    prevSlide();
  } else if (event.key === " ") {
    // Spatiebalk om de slideshow aan/uit te zetten
    toggleSlideshow();
  }
});

// Laat de eerste dia zien bij het laden van de pagina
showSlide(currentSlide);
