export class Card {

    constructor(img, observer, templateSelelctor, handleCardClick, handleLikeCard, handleDeleteCard) {
        this._card = img;
        this._observer = observer;

        this._templateSelector = templateSelelctor;
        this._galleryCard = document.querySelector(templateSelelctor).content.querySelector('.gallery__card');
        this._handleCardClick = handleCardClick;
        this._handleLikeCard = handleLikeCard;
        this._handleDeleteCard = handleDeleteCard;
    }

    generateCard() {
        this._element = this._getTemplate();
        this._deleteButton = this._element.querySelector('.gallery__delete');
        this._deleteButton.disabled = true;
        this._heartButton = this._element.querySelector('.gallery__heart');
        this._likeElement = this._element.querySelector('.gallery__heart-likes');
        this._picture = this._element.querySelector('.gallery__pic');
        this._picText = this._element.querySelector('.gallery__text');
    
        //Наполняем
        this._picture.setAttribute('alt', this._card.name);
        this._picture.setAttribute('src', this._card.link);
        this._picText.textContent = this._card.name;
        this._likeElement.textContent = '' + this._card.likes.length;

        //Проверяем своя или нет - вешаем кнопку удалить
        if (this._observer._id === this._card.owner._id) {this._displayDelete()};

        //Обновляем цвет сердечка
        this._updateColorOfHeart(this._observer);

        //Вешаем слушателей
        this._setEventListeners();
        return this._element;
    }

    getCardId() {
        return this._card._id;
    }

    getOwnerId() {
        return this._card.owner._id;
    }

    getObserverId() {
        return this._observer._id;
    }

    getLikesArray() {
        return this._card.likes.map(item => item._id);
    }

    updateCard(card) {
        this._card = card;
        this._likeElement.textContent = '' + this._card.likes.length;

        //Проверяем своя или нет - вешаем кнопку удалить
        if (this._observer._id === this._card.owner._id) {this._displayDelete()};

        //Обновляем цвет сердечка
        this._updateColorOfHeart(this._observer);
    }

    //Удалить карту
    deleteCard() {
        this._element.remove();
        this._element = null;                
    }

    //Приватные методы====================================================================================================

    _displayDelete() {
        this._deleteButton.classList.add('gallery__delete_displayed');
        this._deleteButton.disabled = false;
    }

    _updateColorOfHeart(observer) {
        if (this.getLikesArray().includes(observer._id)) {
            this._heartButton.classList.add('gallery__heart_active');
        } else {
            this._heartButton.classList.remove('gallery__heart_active');
        }
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

}