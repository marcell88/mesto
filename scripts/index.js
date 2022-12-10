//=======ПЕРЕМЕННЫЕ=======

//Элементы на странице
let popup = document.querySelector(".popup");
let profileName = document.querySelector(".profile__name");
let profileAbout = document.querySelector(".profile__about");

//Форма
let form = document.querySelector(".popup__form");
let inputName = document.querySelector(".popup__input_type_name");
let inputJob = document.querySelector(".popup__input_type_job");

//Кнопки
let closePopup = document.querySelector(".popup__close");
let editButton = document.querySelector(".profile__edit-button");



//=======ФУНКЦИИ=======

//Открытие попапа
const popupOpened = () => {
    popup.classList.add('popup_opened');

    //Копируем изначальное описание в форму
    inputName.value = profileName.textContent.trim();
    inputJob.value = profileAbout.textContent.trim();
}

//Закрытие попапа
const popupClosed = () => {
    popup.classList.remove('popup_opened');
}

// Обработчик «отправки» формы, хотя пока она никуда отправляться не будет

const handleFormSubmit = (evt) => {
    evt.preventDefault(); // Эта строчка отменяет стандартную отправку формы.

    // Получите значение полей jobInput и nameInput из свойства value
    let name = inputName.value;
    let job = inputJob.value;

    // Выберите элементы, куда должны быть вставлены значения полей
    profileName.textContent = name;
    profileAbout.textContent = job;
    popupClosed();
}



//=======СКРИПТ=======

//Слушаем события - открытие, закрытие, сабмит
editButton.addEventListener('click', popupOpened);
closePopup.addEventListener('click', popupClosed);
form.addEventListener('submit', handleFormSubmit);
