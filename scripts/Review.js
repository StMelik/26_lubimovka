export class Review {
    constructor(name, review, selectorTemplate) {
        this._name = name;
        this._review = review;
        this._template = document.querySelector(`.${selectorTemplate}`);
    }
    _removeElement = () => {
        this._view = null;
    }
    createReview = () => {
        this._view = this._template.content.cloneNode(true).querySelector('.reviews__box');
        this._view.querySelector('.reviews__text').textContent = this._review;
        this._view.querySelector('.reviews__author').textContent = this._name;

        return this._view;
    }
}