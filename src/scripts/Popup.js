export class Popup {

    constructor(selector) {
        this._popupType = document.querySelector(selector);
        this._closeButton  = this._popupType.querySelector('.popup__close');
        
        this._handleSideClickRef = (evt) => { this._handleSideClick(evt) };
        this._handleEscapePressRef = (evt) => { this._handleEscapePress(evt) };
        this._handleCloseButtonRef = () => { this.close() };
    }

    //Открытие попапа
    open() {
        this._popupType.classList.add('popup_opened');
        this.setEventListeners();
    }

    //Закрытие попапа
    close() {
        this._popupType.classList.remove('popup_opened');
        this._removeEventListeners();
    }

    //Получаем тип попапа
    getPopupType() {
        return this._popupType;
    }

    //Вешаем слушателей
    setEventListeners() {
        document.addEventListener('keydown', this._handleEscapePressRef);
        this._popupType.addEventListener('click', this._handleSideClickRef);
        this._closeButton.addEventListener('click', this._handleCloseButtonRef);
    }

    _removeEventListeners() {
        document.removeEventListener('keydown', this._handleEscapePressRef);
        this._popupType.removeEventListener('click', this._handleSideClickRef);
        this._closeButton.removeEventListener('click', this._handleCloseButtonRef);
    }

    _handleEscapePress(evt) {
        if (evt.key === 'Escape') {
            this.close();
        }
    }
    
    _handleSideClick(evt) {
        if (evt.target === evt.currentTarget) {
            this.close();
        }
    }

}