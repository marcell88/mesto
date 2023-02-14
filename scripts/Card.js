export class Card {

    constructor(img, templateSelelctor, handleCardClick) {
        this._name = img.name;
        this._link = img.link;
        this._templateSelector = templateSelelctor;
        this._galleryCard = document.querySelector(templateSelelctor).content.querySelector('.gallery__card');
        this._handleCardClick = handleCardClick;
    }

    generateCard() {
        this._element = this._getTemplate();
        this._deleteButton = this._element.querySelector('.gallery__delete');
        this._heartButton = this._element.querySelector('.gallery__heart');
        this._picture = this._element.querySelector('.gallery__pic');
        this._picText = this._element.querySelector('.gallery__text');
    
        //Наполняем
        this._picture.setAttribute('alt', this._name);
        this._picture.setAttribute('src', this._link);
        this._picText.textContent = this._name;

        //Вешаем слушателей
        this._setEventListeners();

        return this._element;
    }

    _getTemplate() {
        const galleryCard = this._galleryCard.cloneNode(true);
        return galleryCard;
    }

    _setEventListeners() {
        this._deleteButton.addEventListener('click', (evt) => {this._removeCard(evt)});
        this._heartButton.addEventListener('click', (evt) => {this._likeCard(evt)});
        this._picture.addEventListener('click', () => {this._handleCardClick(this._name, this._link)});
    }

    //Удалить карту
    _removeCard(evt) {
        evt.target.closest('.gallery__card').remove();
    }

    //Залайкать карту
    _likeCard(evt) {
        evt.target.classList.toggle('gallery__heart_active');
    }

}