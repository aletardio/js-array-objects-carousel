const images = [
    {
        image: 'img/01.webp',
        title: 'Marvel\'s Spiderman Miles Morale',
        text: 'Experience the rise of Miles Morales as the new hero masters incredible, explosive new powers to become his own Spider-Man.',
    }, {
        image: 'img/02.webp',
        title: 'Ratchet & Clank: Rift Apart',
        text: 'Go dimension-hopping with Ratchet and Clank as they take on an evil emperor from another reality.',
    }, {
        image: 'img/03.webp',
        title: 'Fortnite',
        text: "Grab all of your friends and drop into Epic Games Fortnite, a massive 100 - player face - off that combines looting, crafting, shootouts and chaos.",
    }, {
        image: 'img/04.webp',
        title: 'Stray',
        text: 'Lost, injured and alone, a stray cat must untangle an ancient mystery to escape a long-forgotten city',
    }, {
        image: 'img/05.webp',
        title: "Marvel's Avengers",
        text: 'Marvel\'s Avengers is an epic, third-person, action-adventure game that combines an original, cinematic story with single-player and co-operative gameplay.',
    }
];

// Riferimento all'elemento carosello
const carousel = document.getElementById('carousel');

// Riferiment0 al pulsante "Indietro"
const btnPrev = document.getElementById('prev');

// Riferimento al pulsante "Avanti"
const btnNext = document.getElementById('next');

// Dichiarazione di una variabile per tenere traccia dell'indice corrente dell'immagine visualizzata
let currentIndex = 0; 

// Riferimento per il numero totale di elementi all'interno del carosello
const totalImages = document.querySelectorAll('.carousel-item').length;

// Gestione del pulsante "Avanti"
btnNext.addEventListener('click', () => {
    // Controlla se l'indice corrente è inferiore al numero totale di elementi - 1
    if (currentIndex < totalImages - 1) {

        currentIndex++;
    } 

    else {

        currentIndex = 0; 
    }
    })

// Gestione del pulsante "Indietro"
btnPrev.addEventListener('click', () => {
    // Controlla se l'indice corrente è maggiore di 0
    if (currentIndex > 0) {

        currentIndex--;
    }
    else {

        currentIndex = totalImages - 1; 
    }
})