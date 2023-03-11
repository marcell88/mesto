import { Popup } from "./Popup";

export class PopupDeleteCard extends Popup {

    constructor(selector, handleFormSubmit) {
        super(selector);
        this._card = null;

        this._form = this._popupType.querySelector('.popup__form');
        this._submit = this._popupType.querySelector('.popup__button');
        this._initialButtonText = this._submit.textContent;

        this._handleFormSubmit = (evt) => {
            evt.preventDefault();
            handleFormSubmit( this._card );
      //      this.close();
        };

        
    }

    open(card) {
        super.open();
        this._card = card;
    }

    _setCard(card) {
        this._card = card;
    }

    setEventListeners() {
        super.setEventListeners();
        this._form.addEventListener('submit', this._handleFormSubmit);
    }

    close() {
        super.close();
        this._form.removeEventListener('submit', this._handleFormSubmit);
        this._form.reset();
        this._card = null;
    }

    isLoading(str, flag) {
        flag ? this._submit.textContent = str : this._submit.textContent = this._initialButtonText;
    }

}
