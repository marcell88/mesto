export class FormValidator {
    
    constructor(objectOfSettings, form) {
        this._formSelector = objectOfSettings.formSelector;
        this._inputSelector = objectOfSettings.inputSelector;
        this._submitButtonSelector = objectOfSettings.submitButtonSelector;
        this._inactiveButtonClass = objectOfSettings.inactiveButtonClass;
        this._inputErrorClass = objectOfSettings.inputErrorClass;
        this._errorClass = objectOfSettings.errorClass;

        this._form = form;
    }

    enableValidation() {
        this._toggleButtonState(this._form.querySelectorAll(this._inputSelector), this._form.querySelector(this._submitButtonSelector), this._inactiveButtonClass);
        Array.from(this._form.querySelectorAll(this._inputSelector)).forEach (input => {
            input.addEventListener('input', () => {
                this._checkValidity(input);
            });
        });
    }
    
    getFormElement() {
        return this._form;
    }

    _checkValidity(input) {
        
        if (!input.validity.valid) {
            //если ошибка
            input.classList.add(this._inputErrorClass);
            this._form.querySelector(`.${input.id}-error`).classList.add(this._errorClass);
            this._form.querySelector(`.${input.id}-error`).textContent = input.validationMessage;
    
        } else { 
            //если без ошибки
            input.classList.remove(this._inputErrorClass);
            this._form.querySelector(`.${input.id}-error`).classList.remove(this._errorClass);
            this._form.querySelector(`.${input.id}-error`).textContent = '';
        }
    
        this._toggleButtonState(this._form.querySelectorAll(this._inputSelector), this._form.querySelector(this._submitButtonSelector), this._inactiveButtonClass);
    }

    _toggleButtonState(inputList, buttonElement, inactive) {
        if (this._hasInvalidInput(inputList)) {
            buttonElement.classList.add(inactive);
            buttonElement.setAttribute('disabled', true);
        } else {
            buttonElement.classList.remove(inactive);
            buttonElement.removeAttribute('disabled');
        }
    }
    
    _hasInvalidInput(inputList) {
        const inputArray = Array.from(inputList);
        return inputArray.some( inputElement => !inputElement.validity.valid);
    }
    
}