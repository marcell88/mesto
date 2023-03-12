import { PopupWithForm } from "./PopupWithForm";

export class PopupWithConfirmation extends PopupWithForm {

    constructor(selector, handleFormSubmit) {
        super(selector, handleFormSubmit);

        this._card = null;

        //Переписываем функцию
        this._handleFormSubmit = (evt) => {
            evt.preventDefault();
            handleFormSubmit( this._card );
        };
    }

    open(card) {
        super.open();
        this._card = card;
    }

    close() {
        super.close();
        this._card = null;
    }

}
