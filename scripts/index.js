//=======ПЕРЕМЕННЫЕ=============

//Элементы на странице
const popupEdit = document.querySelector('.popup_type_edit');
const popupAdd = document.querySelector('.popup_type_add');
const popupPic = document.querySelector('.popup_type_pic');

const profileName = document.querySelector('.profile__name');
const profileAbout = document.querySelector('.profile__about');
const gallery = document.querySelector('.gallery');

const picSpreaded = popupPic.querySelector('.popup__pic');
const textToSpreadedPic = popupPic.querySelector('.popup__text');

const galleryTemplate = document.querySelector('.gallery__template').content;

//Формы
const formProfile = popupEdit.querySelector('.popup__form');
const inputsProfileForm = formProfile.querySelectorAll('.popup__input');
const buttonSubmitProfile = formProfile.querySelector('.popup__button');

const formPic = popupAdd.querySelector('.popup__form');
const inputsNewCardForm = formPic.querySelectorAll('.popup__input');
const buttonSubmitNewCard = formPic.querySelector('.popup__button');

const inputName = formProfile.querySelector('.popup__input_type_name');
const inputJob = formProfile.querySelector('.popup__input_type_job');

const inputPicName = formPic.querySelector('.popup__input_type_pic-name');
const inputPicLink = formPic.querySelector('.popup__input_type_pic-link');

//Кнопки
const buttonOpenEditPopup = document.querySelector('.profile__edit-button');
const buttonOpenNewCardPopup = document.querySelector('.profile__add-button');
const buttonCloseEditPopup = popupEdit.querySelector('.popup__close');
const buttonCloseAddPopup = popupAdd.querySelector('.popup__close');
const buttonClosePicPopup = popupPic.querySelector('.popup__close');

//=======ФУНКЦИИ=======

//Открытие попапа
const openPopup = (popupType) => {
    popupType.classList.add('popup_opened');
    document.addEventListener('keydown', handleEscapePress);
    popupType.addEventListener('click', handleSideClick);
}

//Закрытие попапа
const closePopup = (popupType) => {
    popupType.classList.remove('popup_opened');
    document.removeEventListener('keydown', handleEscapePress);
    popupType.removeEventListener('click', handleSideClick);
}

//Открытие попапа для редактирования профиля
const openEditPopup = () => {
    openPopup(popupEdit);

    //Копируем изначальное описание в форму
    inputName.value = profileName.textContent.trim();
    inputJob.value = profileAbout.textContent.trim();

    //Проверяем валидность формы при открытии
    //Так как мы вносим значения по умолчанию, а ошибки могут наследоваться
    Array.from(inputsProfileForm).forEach( (input) => {
        checkValidity(formProfile, input, objectOfSettings);
    });
    toggleButtonState(inputsProfileForm, buttonSubmitProfile, objectOfSettings);    
}

//Открытие попапа для добавления карточки
const openAddPopup = () => {
    openPopup(popupAdd);
    
    //Проверяем валидность при открытии
    toggleButtonState(inputsNewCardForm, buttonSubmitNewCard, objectOfSettings);
}

const handleEscapePress = (evt) => {
    if (evt.key === 'Escape') {
        const popupType = document.querySelector('.popup_opened');
        closePopup(popupType);
    }
}

const handleSideClick = (evt) => {
    if (evt.target === evt.currentTarget) {
        closePopup(evt.currentTarget);
    }
}

// Обработчик «отправки» формы, хотя пока она никуда отправляться не будет
const handleProfileForm = (evt) => {
    evt.preventDefault(); // Эта строчка отменяет стандартную отправку формы.
    profileName.textContent = inputName.value;
    profileAbout.textContent = inputJob.value;
    closePopup(popupEdit);
}

const handleNewCardForm = (evt) => {
    evt.preventDefault(); // Эта строчка отменяет стандартную отправку формы.
    if (inputPicName.value !== '' && inputPicLink.value !== '') {
        const cardToAdd = {name: inputPicName.value, link: inputPicLink.value};
        renderCard(gallery, createCard(cardToAdd), true);
    }
    closePopup(popupAdd);
    evt.currentTarget.reset();
}

//Удалить карту
const removeCard = (evt) => {
    evt.target.closest('.gallery__card').remove();
}

//Залайкать карту
const likeCard = (evt) => {
    evt.target.classList.toggle('gallery__heart_active');
}

const spreadCard = (img) => {
    openPopup(popupPic);
    picSpreaded.setAttribute('alt', img.name);
    picSpreaded.setAttribute('src', img.link);
    textToSpreadedPic.textContent = img.name;
}

//Добавить карту на сайт
const createCard = (img) => {
    
    //Клонируем
    const galleryCard = galleryTemplate.querySelector('.gallery__card').cloneNode(true);
    const galleryPic = galleryCard.querySelector('.gallery__pic');
    const galleryText = galleryCard.querySelector('.gallery__text');
    const galleryHeart = galleryCard.querySelector('.gallery__heart');
    const galleryDelete = galleryCard.querySelector('.gallery__delete');

    //Наполняем
    galleryPic.setAttribute('alt', img.name);
    galleryPic.setAttribute('src', img.link);
    galleryText.textContent = img.name;

    //Вешаем слушателей
    galleryDelete.addEventListener('click', removeCard);
    galleryHeart.addEventListener('click', likeCard);
    galleryPic.addEventListener('click', () => { spreadCard(img) });

    return galleryCard;
}

//true - prepend, false - append
const renderCard = (container, cardObject, place = false) => {
    //Размещаем
    if (place) {
      container.prepend(cardObject);
    } else {
      container.append(cardObject);
    }
} 


//=======СКРИПТ=======

//Задаем начальные карты
initialCards.forEach( item => renderCard(gallery, createCard(item), false) );

//Слушаем события - открытие, закрытие, сабмит
buttonOpenEditPopup.addEventListener('click', openEditPopup);
buttonOpenNewCardPopup.addEventListener('click', openAddPopup);

buttonCloseEditPopup.addEventListener('click', () => {closePopup(popupEdit)});
buttonCloseAddPopup.addEventListener('click', () => {closePopup(popupAdd)});
buttonClosePicPopup.addEventListener('click', () => {closePopup(popupPic)});

formProfile.addEventListener('submit', handleProfileForm);
formPic.addEventListener('submit', handleNewCardForm);

