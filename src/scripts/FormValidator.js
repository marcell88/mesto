export class FormValidator {
    
    constructor(objectOfSettings, form) {
        this._formSelector = objectOfSettings.formSelector;
        this._inputSelector = objectOfSettings.inputSelector;
        this._submitButtonSelector = objectOfSettings.submitButtonSelector;
        this._inactiveButtonClass = objectOfSettings.inactiveButtonClass;
        this._inputErrorClass = objectOfSettings.inputErrorClass;
        this._errorClass = objectOfSettings.errorClass;

        this._form = form;

        this._inputList = this._form.querySelectorAll(this._inputSelector);
        this._buttonElement = this._form.querySelector(this._submitButtonSelector);
    }

    enableValidation() {
        this._toggleButtonState();
        this._setEventListeners();
    }

    getFormElement() {
        return this._form;
    }

    resetValidation() {
        this._toggleButtonState();
        Array.from(this._inputList).forEach( item => {
            this._hideError(item);
        });
    }

    _setEventListeners() {
        Array.from(this._inputList).forEach (input => {
            input.addEventListener('input', () => {this._checkValidity(input)});
        });
    }

    _checkValidity(input) {  
        if (!input.validity.valid) {
            this._showError(input);
        } else { 
            this._hideError(input);
        }
        this._toggleButtonState();
    }

    _toggleButtonState() {
        if (this._hasInvalidInput(this._inputList)) {
            this._buttonElement.classList.add(this._inactiveButtonClass);
            this._buttonElement.setAttribute('disabled', true);
        } else {
            this._buttonElement.classList.remove(this._inactiveButtonClass);
            this._buttonElement.removeAttribute('disabled');
        }
    }

    _hasInvalidInput(inputList) {
        const inputArray = Array.from(inputList);
        return inputArray.some( inputElement => !inputElement.validity.valid);
    }

    _hideError(input) {
        input.classList.remove(this._inputErrorClass);
        this._form.querySelector(`.${input.id}-error`).classList.remove(this._errorClass);
        this._form.querySelector(`.${input.id}-error`).textContent = '';
    }

    _showError(input) {
        input.classList.add(this._inputErrorClass);
        this._form.querySelector(`.${input.id}-error`).classList.add(this._errorClass);
        this._form.querySelector(`.${input.id}-error`).textContent = input.validationMessage;
    }

}