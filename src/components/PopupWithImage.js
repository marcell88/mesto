import { Popup } from "./Popup";

export class PopupWithImage extends Popup {

    constructor(selector) {
        super(selector);
        this._popupPicImage = this._popupType.querySelector('.popup__pic');
        this._popupPicText = this._popupType.querySelector('.popup__text');
    }

    open(name, link) {
        super.open();
        this._popupPicImage.setAttribute('alt', name);
        this._popupPicImage.setAttribute('src', link);
        this._popupPicText.textContent = name;

    }

}