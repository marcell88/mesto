//ИМПОРТ====================================================================================================

//Для подключения css к webpack
import '../pages/index.css';

//Изначальные картинки
import { initialCards } from '../utils/out-of-the-box-cards.js';

//Импорт классов
import { Section } from '../components/Section.js';
import { Card } from '../components/Card.js';
import { PopupWithImage } from '../components/PopupWithImage.js';
import { PopupWithForm } from '../components/PopupWithForm.js';
import { UserInfo } from '../components/UserInfo.js';
import { FormValidator } from '../components/FormValidator.js'



//ФУНКЦИИ====================================================================================================

//Открытие попапа для редактирования профиля
const openEditPopup = () => {
    popupEdit.open();
    const {profileName:name, profileAbout:infoAbout} = profile.getUserInfo();
    inputName.value = name;
    inputJob.value = infoAbout;
    formProfile.resetValidation();
}

//Открытие попапа для добавления карточки
const openAddPopup = () => {
    popupAdd.open();
    formPic.resetValidation();
}

const createCard = (img, template) => {
    const newCard =  new Card (img, template, handleCardClick);
    return newCard.generateCard();
}

//Обработка отправки формы профилдя
const handleProfileForm = ( formValues ) => {
    profile.setUserInfo({
        name: formValues[inputName.name], 
        about: formValues[inputJob.name]
    });
}

//Обработка отправки формы новой каритинки
const handleNewCardForm = ( formValues ) => {
    const img = { name: formValues[inputPicName.name], link: formValues[inputPicLink.name] };
    const cardToRender = createCard(img, '.gallery__template');    
    gallerySection.addItem(cardToRender);
}

//Обработка открытия карточки с каринкой
const handleCardClick = (name, link) => {
    popupPic.open(name, link);
}



//ПЕРМЕННЫЕ=========================================================================================================

//Объекты
const objectOfSettings = {
    formSelector: '.popup__form',
    inputSelector: '.popup__input',
    submitButtonSelector: '.popup__button',
    inactiveButtonClass: 'popup__button_disabled',
    inputErrorClass: 'popup__input_type_error',
    errorClass: 'popup__error_visible'
};

//Подключаем классы
//Рендеринг карточек в галерее
const gallerySection = new Section({
    items: initialCards, 
    renderer: (img) => {
        const newCard = createCard(img, '.gallery__template');
        gallerySection.addItem(newCard);
    }
}, '.gallery');

//Попапы
const popupEdit = new PopupWithForm('.popup_type_edit', handleProfileForm );
const popupAdd = new PopupWithForm('.popup_type_add', handleNewCardForm );
const popupPic = new PopupWithImage('.popup_type_pic');

//Валидаторы форм
const formProfile = new FormValidator (objectOfSettings, popupEdit.getPopupType().querySelector('.popup__form'));
const formPic = new FormValidator (objectOfSettings, popupAdd.getPopupType().querySelector('.popup__form'));

//Профиль пользователя
const profile = new UserInfo({
    profileNameSelector: '.profile__name',
    profileAboutSelector: '.profile__about'
});

//Переменные - элементы страницы
const buttonOpenEditPopup = document.querySelector('.profile__edit-button');
const buttonOpenNewCardPopup = document.querySelector('.profile__add-button');
const inputName = formProfile.getFormElement().querySelector('.popup__input_type_name');
const inputJob = formProfile.getFormElement().querySelector('.popup__input_type_job');
const inputPicName = formPic.getFormElement().querySelector('.popup__input_type_pic-name');
const inputPicLink = formPic.getFormElement().querySelector('.popup__input_type_pic-link');



//СКРИПТ=============================================================================================================

//Задаем начальные карты
gallerySection.renderItems();

//Включаем валидаторы форм
formProfile.enableValidation();
formPic.enableValidation();

//Слушаем события - открытие
buttonOpenEditPopup.addEventListener('click', openEditPopup);
buttonOpenNewCardPopup.addEventListener('click', openAddPopup);
