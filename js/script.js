/* Consegna:
Dato un array di oggetti letterali con:
 - url dell'immagine
 - titolo
 - descrizione
Creare un carosello come nella foto allegata.

Milestone 0:
Come nel primo carosello realizzato, focalizziamoci prima sulla creazione del markup statico: costruiamo il container e inseriamo l'immagine grande in modo da poter stilare lo slider.

Milestone 1:
Ora rimuoviamo i contenuti statici e usiamo l'array di oggetti letterali per popolare dinamicamente il carosello.
Al click dell'utente sulle frecce verso sinistra o destra, l'immagine attiva diventerà visibile e dovremo aggiungervi titolo e testo.

Milestone 2:
Aggiungere il ciclo infinito del carosello. Ovvero se l'immagine attiva è la prima e l'utente clicca la freccia verso destra, l'immagine che deve attivarsi sarà l'ultima e viceversa per l'ultima immagine se l'utente clicca la freccia verso sinistra. */

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

const slides = document.querySelector('.slides');


slides.innerHTML += `<div class="slide">
                        <img src="${images[0].image}">
                        <div class="texts">
                            <h6>${images[0].title}</h6>
                            <p>${images[0].text}</p>  
                        </div>
                    </div>`;
    




let allSlides = document.getElementsByClassName('slide');

let currentSlide = 0;

const nextArrow = document.querySelector('.next')
const previousArrow = document.querySelector('.previous')

nextArrow.addEventListener('click',
 
    function () {
        document.getElementById("first").style.display = "none";

        for (let i = 0; i < images.length; i++) {

            slides.innerHTML += `<div class="slide">
            <img src="${images[i].image}">
            <div class="texts">
            <h6>${images[i].title}</h6>
            <p>${images[i].text}</p>  
            </div>
            </div>`;
                
        }

        allSlides[currentSlide].classList.remove('current');
        currentSlide ++;
        allSlides[currentSlide].classList.add('current');
        
        if (currentSlide == allSlides.length - 1) {
            allSlides[currentSlide] = 0
        }

    }
    
);

previousArrow.addEventListener('click',

    function () {
        
        allSlides[currentSlide].classList.remove('current');
        currentSlide --;

        allSlides[currentSlide].classList.add('current');

        if (currentSlide === 2) {
            allSlides[currentSlide].classList.remove('current');
            currentSlide = currentSlide + 5;
            allSlides[currentSlide].classList.add('current');
        }
    }

);