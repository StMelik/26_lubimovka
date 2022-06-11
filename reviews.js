import Review from "./Review.js";
import configReviews from "./configReviews.js";

const buttonBack = document.querySelector('.reviews__button-back');
const buttonAhead = document.querySelector('.reviews__button-ahead');
const reviewsBoxes = document.querySelector('.reviews__boxes');
let numberRadio = 1;
let cards = [];
let countBack = 0;
let countAhead = 3;
let countBackL = 0;
let countAheadL = 3;
let countBackM = 0;
let countAheadM = 2;
let countBackS = 0;
let countAheadS = 1;

function handlerRadioAhead() {
    document.querySelector(`.reviews__radio-${numberRadio}`).classList.remove('reviews__radio-active');
    numberRadio ++;
    document.querySelector(`.reviews__radio-${numberRadio}`).classList.add('reviews__radio-active');
    changeButtonDisabled();
    return numberRadio;
}
function handlerRadioBack() {
    document.querySelector(`.reviews__radio-${numberRadio}`).classList.remove('reviews__radio-active');
    numberRadio --;
    document.querySelector(`.reviews__radio-${numberRadio}`).classList.add('reviews__radio-active');
    changeButtonDisabled();
    return numberRadio;
}
function changeButtonDisabled() {
    if(numberRadio === 1) {
        buttonBack.disabled = true;
        buttonBack.style.opacity = "0.5";
    }
    else if(numberRadio === 4) {
        buttonAhead.disabled = true;
        buttonAhead.style.opacity = "0.5";
    }
    else {
        buttonBack.disabled = false;
        buttonAhead.disabled = false;
        buttonBack.style.opacity = "1";
        buttonAhead.style.opacity = "1";
    }
}

configReviews.forEach(item => {
    const card = new Review(item.name, item.review, item.id, 'reviews__boxes');
    card.createReview();
    if (item.id > 2) {
        card.view.classList.add('reviews__box-close');
    }
    else if(item.id > 1 && window.innerWidth < 1000) {
        card.view.classList.add('reviews__box-close');
    }
    else if(item.id > 0 && window.innerWidth < 800) {
        card.view.classList.add('reviews__box-close');
    }
    reviewsBoxes.append(card.view);
    cards = [...cards].concat(card);
    return cards;
})

document.querySelector(`.reviews__radio-${numberRadio}`).classList.add('reviews__radio-active');
changeButtonDisabled();


buttonAhead.addEventListener('click', ()=> {
    handlerRadioAhead();
    if(window.innerWidth > 1000){
        for(let i=0; i<3; i++) {
            // console.log('1)countAheadL -', countAheadL, 'countBackL - ',countBackL)
            let card = cards[countAheadL];
            let cardClose = document.getElementById(countBackL);
            let cardOpen = document.getElementById(countAheadL);
            countBackL ++;
            countAheadL ++;
            cardClose.classList.add('reviews__box-close');
            cardOpen.classList.remove('reviews__box-close');
            if(i===1) {
                let cardOpen = document.getElementById(countAheadL);
                cardOpen.classList.add('reviews__box-right');
            }
            reviewsBoxes.append(card.view);
            // console.log('2)countAheadL -', countAheadL, 'countBackL - ',countBackL)
        }
    }
    else if(window.innerWidth > 800 && window.innerWidth < 1000){
        // console.log('1)countAheadM -', countAheadM, 'countBackM - ',countBackM)
        for(let i=0; i<2; i++) {
            let card = cards[countAheadM];
            let cardClose = document.getElementById(countBackM);
            let cardOpen = document.getElementById(countAheadM);
            countBackM ++;
            countAheadM ++;
            cardClose.classList.add('reviews__box-close');
            cardOpen.classList.remove('reviews__box-close');
            if(i===0) {
                let cardOpen = document.getElementById(countAheadM);
                cardOpen.classList.add('reviews__box-right');
            }
            reviewsBoxes.append(card.view);
        }
        // console.log('2)countAheadM -', countAheadM, 'countBackM - ',countBackM)
    }
    else {
        // console.log('1)countAheadS -', countAheadS, 'countBackS - ',countBackS)
        let card = cards[countAheadS];
        let cardClose = document.getElementById(countBackS);
        let cardOpen = document.getElementById(countAheadS);
        cardClose.classList.add('reviews__box-close');
        cardOpen.classList.remove('reviews__box-close');
        cardOpen.classList.add('reviews__box-right');
        countBackS ++;
        countAheadS ++;
        reviewsBoxes.append(card.view);
        // console.log('2)countAheadS -', countAheadS, 'countBackS - ',countBackS)
    }

})

buttonBack.addEventListener('click', ()=> {
    handlerRadioBack();
    if(window.innerWidth > 1000){
        for(let i=0; i<3; i++) {
            // console.log('БЫЛО countAheadL -', countAheadL, 'countBackL - ',countBackL);
            countBackL --;
            countAheadL --;
            let card = cards[countBackL];
            let cardClose = document.getElementById(countAheadL);
            let cardOpen = document.getElementById(countBackL);
            cardClose.classList.add('reviews__box-close');
            cardOpen.classList.remove('reviews__box-close');
            reviewsBoxes.prepend(card.view);
            // console.log('СТАЛО countAheadL -', countAheadL, 'countBackL - ',countBackL);
        }
    }
    else if(window.innerWidth > 800 && window.innerWidth < 1000){
        for(let i=0; i<2; i++) {
            // console.log('БЫЛО countAheadM -', countAheadM, 'countBackM - ',countBackM);
            countBackM --;
            countAheadM --;
            let card = cards[countBackM];
            let cardClose = document.getElementById(countAheadM);
            let cardOpen = document.getElementById(countBackM);
            cardClose.classList.add('reviews__box-close');
            cardOpen.classList.remove('reviews__box-close');
            reviewsBoxes.prepend(card.view);
            // console.log('СТАЛО countAheadM -', countAheadM, 'countBackM - ',countBackM);
        }
    }
    else {
        // console.log('БЫЛО countAheadS -', countAheadS, 'countBackS - ',countBackS);
        countBackS --;
        countAheadS --;
        let card = cards[countBackS];
        let cardClose = document.getElementById(countAheadS);
        let cardOpen = document.getElementById(countBackS);
        cardClose.classList.add('reviews__box-close');
        cardOpen.classList.remove('reviews__box-close');
        cardOpen.classList.add('reviews__box-right');
        reviewsBoxes.append(card.view);
        // console.log('СТАЛО countAheadS -', countAheadS, 'countBackS - ',countBackS);
    }
})
