class Review {
    constructor(name, review, id, selectorTemplate) {
        this._name = name;
        this._review = review;
        this.id = id;
        this._template = document.querySelector(`.${selectorTemplate}`);
    }

    createReview = () => {
        this.view = this._template.content.cloneNode(true).querySelector('.reviews__box');
        this.view.querySelector('.reviews__text').textContent = this._review;
        this.view.querySelector('.reviews__author').textContent = this._name;

        this.view.setAttribute('id', `${this.id}`)
        return this.view;
    }
}

export default Review;