const slides = [
	{
		"image":"./assets/images/slideshow/slide1.jpg",
		"tagLine":"Impressions tous formats <span>en boutique et en ligne</span>"
	},
	{
		"image":"./assets/images/slideshow/slide2.jpg",
		"tagLine":"Tirages haute définition grand format <span>pour vos bureaux et events</span>"
	},
	{
		"image":"./assets/images/slideshow/slide3.jpg",
		"tagLine":"Grand choix de couleurs <span>de CMJN aux pantones</span>"
	},
	{
		"image":"./assets/images/slideshow/slide4.png",
		"tagLine":"Autocollants <span>avec découpe laser sur mesure</span>"
	}
]
//Generation des dots dynamiquement
function createDots() {
    const dotsContainer = document.querySelector(".dots");// recuperation de la div dots
	dotsContainer.innerHTML = "";//chaine vide pour reinitialiser le contenu de la balise html div dots
    slides.forEach((_, index) => {
        const dot = document.createElement("span");//creation d'un element div pour chaque dot
        dot.classList.add("dot");//ajout de la class css dot
        if (index === 0) {
            dot.classList.add("dot_selected"); // ajout de la class dot_selected au premier point (index 0)
        }
        dotsContainer.appendChild(dot);//Ajoute dynamiquement chaque élément dot dans le conteneur de dots
    });
}
let currentIndex = 0; // Index de la slide active
//Fonction de mise à jour du caroussel
function updateSlide(index) {
    const bannerImage = document.querySelector(".banner-img");
    const bannerText = document.querySelector("#banner p");
	const dots = document.querySelectorAll(".dot");

    // Met à jour l'image et le texte
	bannerImage.src = slides[index].image;
    bannerText.innerHTML = slides[index].tagLine;
	bannerImage.alt = slides[index].tagLine;

// Met à jour les dots
dots.forEach((dot, i) => {
	dot.classList.toggle("dot_selected", i === index);
});
}
// Ajout des Event Listeners
const arrowRight = document.querySelector(".arrow_right");
arrowRight.addEventListener("click", () => {
	/*if (currentIndex < slides.length - 1) {*/// avec cette condition avance seulement si on n'est pas au maximum
        currentIndex++; //sans la condition if, affiche un message d'effeur (Uncaught TypeError: Cannot read properties of undefined (reading 'image'))
        updateSlide(currentIndex);
    }
);

const arrowLeft = document.querySelector(".arrow_left");
arrowLeft.addEventListener("click", () => {
	/*if (currentIndex > 0) {*///  avec cette condition recule seulement si on n'est pas au minimum
        currentIndex--; //sans la condition if, affiche un message d'effeur (Uncaught TypeError: Cannot read properties of undefined (reading 'image'))
        updateSlide(currentIndex);
    }
);
//Initialisation
createDots();
updateSlide(currentIndex);




