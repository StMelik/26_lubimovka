import {configReviews} from './configReviews.js';
import {Review} from './Review.js';

const reviewsButtonAhead = document.querySelector('.reviews__button-ahead');
const reviewsButtonBack = document.querySelector('.reviews__button-back');
let radioNumber = 1;
const preNumber = document.querySelector('.reviews__radio-1');
const reviewsBoxes = document.querySelector('.reviews__boxes')

preNumber.classList.add('reviews__radio-active');



function changeNumberSliderUp() {

    // const review1 = new Review(configReviews[radioNumber+2].name,configReviews[radioNumber+2].review, "template-review");
    // const review2 = new Review(configReviews[radioNumber+3].name,configReviews[radioNumber+3].review, "template-review");
    // const review3 = new Review(configReviews[radioNumber+4].name,configReviews[radioNumber+4].review, "template-review");
    // reviewsBoxes.append(review1.createReview());
    // reviewsBoxes.append(review2.createReview());
    // reviewsBoxes.append(review3.createReview());
    const preNumber = document.querySelector(`.reviews__radio-${radioNumber}`);
    preNumber.classList.add('reviews__radio-off');
    radioNumber += 1;
    const number = document.querySelector(`.reviews__radio-${radioNumber}`);
    number.classList.add('reviews__radio-active');
    changeButtonDisabled();
    return radioNumber;
}

function changeNumberSliderBack() {

    const preNumber = document.querySelector(`.reviews__radio-${radioNumber}`);
    preNumber.classList.remove('reviews__radio-active');
    radioNumber -= 1;
    const number = document.querySelector(`.reviews__radio-${radioNumber}`);
    number.classList.remove('reviews__radio-off');
    number.classList.add('reviews__radio-active');
    changeButtonDisabled();
    return radioNumber;
}
function changeButtonDisabled() {
    if(radioNumber === 1) {
        reviewsButtonBack.disabled = true;
        reviewsButtonBack.style.opacity = "0.5";
    }
    else if(radioNumber === 4) {
        reviewsButtonAhead.disabled = true;
        reviewsButtonAhead.style.opacity = "0.5";
    }
    else {
        reviewsButtonBack.disabled = false;
        reviewsButtonAhead.disabled = false;
        reviewsButtonBack.style.opacity = "1";
        reviewsButtonAhead.style.opacity = "1";
    }
}
changeButtonDisabled();
reviewsButtonAhead.addEventListener('click', changeNumberSliderUp);
reviewsButtonBack.addEventListener('click', changeNumberSliderBack);


const reviewOne = new Review(configReviews[0].name, configReviews[0].review, "template-review");
const reviewTwo = new Review(configReviews[1].name, configReviews[1].review, "template-review");
const reviewThree = new Review(configReviews[2].name, configReviews[2].review, "template-review");

reviewsBoxes.append(reviewOne.createReview());
reviewsBoxes.append(reviewTwo.createReview());
reviewsBoxes.append(reviewThree.createReview());
