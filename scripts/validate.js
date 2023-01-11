const objectOfSettings = {
    formSelector: '.popup__form',
    inputSelector: '.popup__input',
    submitButtonSelector: '.popup__button',
    inactiveButtonClass: 'popup__button_disabled',
    inputErrorClass: 'popup__input_type_error',
    errorClass: 'popup__error_visible'
}

const hasInvalidInput = (inputList) => {
    const inputArray = Array.from(inputList);
    return inputArray.some( inputElement => !inputElement.validity.valid);
}

const toggleButtonState = (inputList, buttonElement, obj) => {
    if (hasInvalidInput(inputList)) {
        buttonElement.classList.add(obj.inactiveButtonClass);
        buttonElement.setAttribute('disabled', true);
    } else {
        buttonElement.classList.remove(obj.inactiveButtonClass);
        buttonElement.removeAttribute('disabled');
    }
}

//Функция проверки валидности
const checkValidity = (form, input, obj) => {
    
    if (!input.validity.valid) {
        //если ошибка
        input.classList.add(obj.inputErrorClass);
        form.querySelector(`.${input.id}-error`).classList.add(obj.errorClass)
        form.querySelector(`.${input.id}-error`).textContent = input.validationMessage;

    } else { 
        //если без ошибки
        input.classList.remove(obj.inputErrorClass);
        form.querySelector(`.${input.id}-error`).classList.remove(obj.errorClass)
        form.querySelector(`.${input.id}-error`).textContent = '';
    }

    toggleButtonState(form.querySelectorAll(obj.inputSelector), form.querySelector(obj.submitButtonSelector), obj);
}

//Вешаем слушателя на каждый input у формы
const setEventListener = (form, obj) => {
    const inputList = Array.from(form.querySelectorAll(obj.inputSelector));
    inputList.forEach (input => {
        input.addEventListener('input', () => {
            checkValidity(form, input, obj);
        });
    });
}

//Для каждой формы вызываем функцию, которая вешает слушателя на каждый input
const enableValidation = (obj) => {
    const formList = Array.from(document.querySelectorAll(obj.formSelector));
    formList.forEach (form => {
        setEventListener(form, obj);
    });
}

//Вызываем функцию валидатор, параметр - объект-настроек
enableValidation(objectOfSettings);