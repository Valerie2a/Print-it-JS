const slides = [
	{
		"image":"slide1.jpg",
		"tagLine":"Impressions tous formats <span>en boutique et en ligne</span>"
	},
	{
		"image":"slide2.jpg",
		"tagLine":"Tirages haute définition grand format <span>pour vos bureaux et events</span>"
	},
	{
		"image":"slide3.jpg",
		"tagLine":"Grand choix de couleurs <span>de CMJN aux pantones</span>"
	},
	{
		"image":"slide4.png",
		"tagLine":"Autocollants <span>avec découpe laser sur mesure</span>"
	}
]


const arrowLeft = document.querySelector(".arrow_left");
const arrowRight = document.querySelector(".arrow_right");

// Ajout des Event Listeners
arrowLeft.addEventListener("click", () => {
    console.log("Flèche gauche cliquée !");
});

arrowRight.addEventListener("click", () => {
    console.log("Flèche droite cliquée !");
});

function createDots() {
    const dotsContainer = document.querySelector(".dots");// recuperation de la div dots
	dotsContainer.innerHTML = "";//chaine vide pour reinitialiser le contenu de la balise html div dots
    slides.forEach((_, index) => {
        const dot = document.createElement("span");//creation d'un element div pour chaque dot
        dot.classList.add("dot");//ajout de la class css dot
        if (index === 0) {
            dot.classList.add("dot_selected"); // ajout de la class dot_selected au premier point (index 0)
        }
        dotsContainer.appendChild(dot);//ajout de l'element dans la page avec appendchild, le rend visible
    });
}
createDots();//fonction appelée
  

