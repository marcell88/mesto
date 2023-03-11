export class Card {

    constructor(img, templateSelelctor, handleCardClick, handleLikeCard, handleDeleteCard) {
        this._card = img;
        this._templateSelector = templateSelelctor;
        this._galleryCard = document.querySelector(templateSelelctor).content.querySelector('.gallery__card');
        this._handleCardClick = handleCardClick;
        this._handleLikeCard = handleLikeCard;
        this._handleDeleteCard = handleDeleteCard;
    }

    generateCard() {
        this._element = this._getTemplate();
        this._deleteButton = this._element.querySelector('.gallery__delete');
        this._heartButton = this._element.querySelector('.gallery__heart');
        this._likeElement = this._element.querySelector('.gallery__heart-likes');
        this._picture = this._element.querySelector('.gallery__pic');
        this._picText = this._element.querySelector('.gallery__text');
    
        //Наполняем
        this._picture.setAttribute('alt', this._card.name);
        this._picture.setAttribute('src', this._card.link);
        this._picText.textContent = this._card.name;
        this._likeElement.textContent = '' + this._card.likes.length;

        //Вешаем слушателей
        this._setEventListeners();
        return this._element;
    }

    getId() {
        return this._card._id;
    }

    getOwnerId() {
        return this._card.owner._id;
    }

    getLikesArray() {
        return this._card.likes.map(item => item._id);
    }

    updateColorOfHeart(user) {
        if (this.getLikesArray().includes(user._id)) {
            this._heartButton.classList.add('gallery__heart_active');
        } else {
            this._heartButton.classList.remove('gallery__heart_active');
        }
    }

    updateCard(card) {
        this._card = card;
        this._likeElement.textContent = '' + this._card.likes.length;
    }

    _getTemplate() {
        const galleryCard = this._galleryCard.cloneNode(true);
        return galleryCard;
    }

    _setEventListeners() {
        this._deleteButton.addEventListener('click', () => { this._handleDeleteCard(this) });
        this._heartButton.addEventListener('click', () => { this._handleLikeCard(this) });
        this._picture.addEventListener('click', () => {this._handleCardClick(this._card.name, this._card.link)});
    }

    //Удалить карту
    deleteCard() {
        this._element.remove();
        this._element = null;
    }

    displayDelete() {
        this._deleteButton.classList.add('gallery__delete_displayed');
    }

}