import { Popup } from "./Popup";

export class PopupWithForm extends Popup {

    constructor(selector, handleFormSubmit) {
        super(selector);
        this._form = this._popupType.querySelector('.popup__form');
        this._inputList = Array.from(this._form.querySelectorAll('.popup__input'));

        this._handleFormSubmit = (evt) => {
            evt.preventDefault();
            handleFormSubmit( this._getInputValues() );
            this.close();
        };
   
    }

    setEventListeners() {
        super.setEventListeners();
        this._form.addEventListener('submit', this._handleFormSubmit);
    }

    _getInputValues() {
        this._formValues = {};
        this._inputList.forEach( input => {
            this._formValues[input.name] = input.value;
        });
        return this._formValues;
    }

    close() {
        super.close();
        this._form.removeEventListener('submit', this._handleFormSubmit);
        this._form.reset();
    }



}