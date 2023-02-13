import {Popup} from './Popup.js';

export class Card extends Popup {

    constructor(img, templateSelelctor) {
        super(document.querySelector('.popup_type_pic'));
        this._name = img.name;
        this._link = img.link;
        this._templateSelector = templateSelelctor;
    }

    generateCard() {
        this._element = this._getTemplate();
        const galleryPic = this._element.querySelector('.gallery__pic');
        const galleryText = this._element.querySelector('.gallery__text');
    
        //Наполняем
        galleryPic.setAttribute('alt', this._name);
        galleryPic.setAttribute('src', this._link);
        galleryText.textContent = this._name;

        //Вешаем слушателей
        this._setEventListeners();

        return this._element;
    }

    renderCard(container, place = false) {
        //true - prepend, false - append
        const cardToRender = this.generateCard();
        place ? container.prepend(cardToRender) : container.append(cardToRender);
        return cardToRender;
    }

    _getTemplate() {
        const galleryCard = document.querySelector(this._templateSelector)
            .content
            .querySelector('.gallery__card')    
            .cloneNode(true);
        return galleryCard;
    }

    _setEventListeners() {
        this._element.querySelector('.gallery__delete').addEventListener('click', (evt) => {this._removeCard(evt)});
        this._element.querySelector('.gallery__heart').addEventListener('click', (evt) => {this._likeCard(evt)});
        this._element.querySelector('.gallery__pic').addEventListener('click', () => {this._spreadCard()});
    }

    //Удалить карту
    _removeCard(evt) {
        evt.target.closest('.gallery__card').remove();
    }

    //Залайкать карту
    _likeCard(evt) {
        evt.target.classList.toggle('gallery__heart_active');
    }

    //Увеличиваем карту
    _spreadCard() {
        this.openPopup();
        this._popupType.querySelector('.popup__pic').setAttribute('alt', this._name);
        this._popupType.querySelector('.popup__pic').setAttribute('src', this._link);
        this._popupType.querySelector('.popup__text').textContent = this._name;
    }

}