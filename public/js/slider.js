const slider = document.querySelector('.slider');
const sliderButton = document.querySelectorAll('.slider button');
const grandSlides = document.querySelector('.slider .slides');
let slides = document.querySelectorAll('.slide');
let index = 1;

/* On copie le premier element et le deuxiémè element */

let firstChild = slides[index - 1].cloneNode(true);
let lastChild = slides[slides.length - 1].cloneNode(true);

/* On l'attribut des id */

firstChild.id = "first-child";
lastChild.id = "last-child";

/* On ajouter nos élément dans le container */

grandSlides.append(firstChild);
grandSlides.prepend(lastChild);


let slideWidth = slides[index - 1].clientWidth;
grandSlides.style.transform = `translateX(${-slideWidth * index}px)`;
grandSlides.style.transition = '0.7s';

let getSlides = () => document.querySelectorAll('.slide');

let transitionend = e => {
    slides = getSlides();
    if (slides[index].id === firstChild.id) {
        grandSlides.style.transition = "none";
        index = 1;
        grandSlides.style.transform = `translateX(${-slideWidth * index}px)`;
    }

    if (slides[index].id === lastChild.id) {
        grandSlides.style.transition = "none";
        index = slides.length - 2;
        grandSlides.style.transform = `translateX(${-slideWidth * index}px)`;
    }
}

sliderButton.forEach(button => {
    button.addEventListener('click', e => {
        if (e.target.className === "prev") {
            if(index <= 0){
                return;
            }

            index--;
            console.log(index);
            grandSlides.style.transform = `translateX(${-slideWidth * index}px)`;
            grandSlides.style.transition = '0.7s';

        } else {

            slides = getSlides();
            if (index >= slides.length - 1) return

            index++
            grandSlides.style.transform = `translateX(${-slideWidth * index}px)`;
            grandSlides.style.transition = '0.7s';
            console.log(index);
        }
    })
});

// Fonction

grandSlides.addEventListener('transitionend', transitionend)

window.addEventListener('resize', ()=>{
    console.log('Resize');
})
