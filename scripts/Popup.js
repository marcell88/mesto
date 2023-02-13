export class Popup {

    constructor(popupType) {
        this._popupType = popupType;
        this._closeButton  = this._popupType.querySelector('.popup__close');
        
        this._handleSideClickRef = (evt) => { this._handleSideClick(evt) };
        this._handleEscapePressRef = (evt) => { this._handleEscapePress(evt) };
        this._handleCloseButtonRef = () => { this.closePopup() };

    }

    //Открытие попапа
    openPopup() {
        this._popupType.classList.add('popup_opened');
        document.addEventListener('keydown', this._handleEscapePressRef);
        this._popupType.addEventListener('click', this._handleSideClickRef);
        this._closeButton.addEventListener('click', this._handleCloseButtonRef);
    }

    //Закрытие попапа
    closePopup() {
        this._popupType.classList.remove('popup_opened');
        document.removeEventListener('keydown', this._handleEscapePressRef);
        this._popupType.removeEventListener('click', this._handleSideClickRef);
        this._closeButton.removeEventListener('click', this._handleCloseButtonRef);
    }

    getPopupType() {
        return this._popupType;
    }

    _handleEscapePress(evt) {
        if (evt.key === 'Escape') {
            this.closePopup();
        }
    }
    
    _handleSideClick(evt) {
        if (evt.target === evt.currentTarget) {
            this.closePopup();
        }
    }
    
}