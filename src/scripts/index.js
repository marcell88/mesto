import '../pages/index.css';

//=======ПЕРМЕННЫЕ=======

//Изначальные картинки
import {initialCards} from './out-of-the-box-cards.js';

//Импорт классов
import {Card} from './Card.js';
import {Popup} from './Popup.js';
import {FormValidator} from './FormValidator.js'

//Объекты
const objectOfSettings = {
    formSelector: '.popup__form',
    inputSelector: '.popup__input',
    submitButtonSelector: '.popup__button',
    inactiveButtonClass: 'popup__button_disabled',
    inputErrorClass: 'popup__input_type_error',
    errorClass: 'popup__error_visible'
};

//Объекты - попапы
const popupEdit = new Popup( document.querySelector('.popup_type_edit') );
const popupAdd = new Popup( document.querySelector('.popup_type_add') );
const popupPic = new Popup( document.querySelector('.popup_type_pic') );
const popupPicImage = popupPic.getPopupType().querySelector('.popup__pic');
const popupPicText = popupPic.getPopupType().querySelector('.popup__text');

//Объекты - валидаторы форм
const formProfile = new FormValidator (objectOfSettings, popupEdit.getPopupType().querySelector('.popup__form'));
const formPic = new FormValidator (objectOfSettings, popupAdd.getPopupType().querySelector('.popup__form'));

//Переменные - элементы страницы
const profileName = document.querySelector('.profile__name');
const profileAbout = document.querySelector('.profile__about');
const gallery = document.querySelector('.gallery');
const buttonOpenEditPopup = document.querySelector('.profile__edit-button');
const buttonOpenNewCardPopup = document.querySelector('.profile__add-button');
const inputName = formProfile.getFormElement().querySelector('.popup__input_type_name');
const inputJob = formProfile.getFormElement().querySelector('.popup__input_type_job');
const inputPicName = formPic.getFormElement().querySelector('.popup__input_type_pic-name');
const inputPicLink = formPic.getFormElement().querySelector('.popup__input_type_pic-link');

//=======ФУНКЦИИ=======

//Открытие попапа для редактирования профиля
const openEditPopup = () => {
    popupEdit.openPopup();
    inputName.value = profileName.textContent.trim();
    inputJob.value = profileAbout.textContent.trim();
    formProfile.resetValidation();
}

//Открытие попапа для добавления карточки
const openAddPopup = () => {
    popupAdd.openPopup();
    formPic.getFormElement().reset();
    formPic.resetValidation();
}

const createCard = (img, template) => {
    const newCard =  new Card (img, template, handleCardClick);
    return newCard.generateCard();
}

const renderCard = (container, card, place = false) => {
    place ? container.prepend(card) : container.append(card);
}

//Обработка отправки формы профилдя
const handleProfileForm = (evt) => {
    evt.preventDefault();
    profileName.textContent = inputName.value;
    profileAbout.textContent = inputJob.value;
    popupEdit.closePopup();
}

//Обработка отправки формы новой каритинки
const handleNewCardForm = (evt) => {
    evt.preventDefault();
    if (inputPicName.value !== '' && inputPicLink.value !== '') {
        const img = {name: inputPicName.value, link: inputPicLink.value};
        const cardToRender = createCard(img, '.gallery__template');
        renderCard(gallery, cardToRender, true);
    }
    popupAdd.closePopup();
    evt.currentTarget.reset();
}

//Обработка открытия карточки с каринкой
const handleCardClick = (name, link) => {
    popupPicImage.setAttribute('alt', name);
    popupPicImage.setAttribute('src', link);
    popupPicText.textContent = name;
    popupPic.openPopup();
}

//=======СКРИПТ=======

//Задаем начальные карты
initialCards.forEach( item => {
    const cardToRender = createCard(item, '.gallery__template');
    renderCard(gallery, cardToRender, false);
});

//Включаем валидаторы форм
formProfile.enableValidation();
formPic.enableValidation();

//Слушаем события - открытие, сабмит
buttonOpenEditPopup.addEventListener('click', openEditPopup);
formProfile.getFormElement().addEventListener('submit', handleProfileForm);

buttonOpenNewCardPopup.addEventListener('click', openAddPopup);
formPic.getFormElement().addEventListener('submit', handleNewCardForm);