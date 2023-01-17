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
// const images = ['img/01.webp','img/02.webp','img/03.webp','img/04.webp','img/05.webp'];

// const carousel = document.querySelector('.my-carousel');
const slides = document.querySelector('.slides');


slides.innerHTML += `<div class="slide">
                        <img src="${images[0].image}">
                        <div class="texts">
                            <h6>${images[0].title}</h6>
                            <p>${images[0].text}</p>  
                        </div>
                    </div>`;
    




const allSlides = document.querySelectorAll('.slide');
console.log('allSlides', allSlides, typeof allSlides);

allSlides[0].classList.add('current'); 

let currentSlide = 0;

const nextArrow = document.querySelector('.next')
const previousArrow = document.querySelector('.previous')

nextArrow.addEventListener('click',

    // function () {
    //     console.log('cliccato su next');
        
        // allSlides[currentSlide].classList.remove('current');
        // currentSlide ++;

        // allSlides[currentSlide].classList.add('current');

    //     if (currentSlide == allSlides.length - 1) {
    //         nextArrow.classList.add('hidden');
    //     }

    //     previousArrow.classList.remove('hidden');
    // }
    function () {
        for (let i = 1; i < images.length; i++) {
            
            console.log(images.length);
            console.log(images[i].image);

            slides.innerHTML += `<div class="slide">
            <img src="${images[i].image}">
            <div class="texts">
            <h6>${images[i].title}</h6>
            <p>${images[i].text}</p>  
            </div>
            </div>`;
            
            // slides.innerHTML = "";
            // slides.innerHTML += `<div class="slide">
            //                          <img src="${images[1].image}">
            //                          <div class="texts">
            //                              <h6>${images[1].title}</h6>
            //                              <p>${images[1].text}</p>  
            //                          </div>
            //                      </div>`;
            allSlides[currentSlide].classList.remove('current');
            currentSlide ++;
            allSlides[currentSlide].classList.add('current');
    
            

            
        }
        // if (currentSlide == allSlides.length - 1) {
        //     nextArrow.classList.add('hidden');
        // }

        // previousArrow.classList.remove('hidden');
    }
    
);

previousArrow.addEventListener('click',

    function () {
        console.log('cliccato su previous');
        
        allSlides[currentSlide].classList.remove('current');
        currentSlide --;

        allSlides[currentSlide].classList.add('current');

        if (currentSlide == 0) {
            previousArrow.classList.add('hidden');
        }

        nextArrow.classList.remove('hidden')
    }

);