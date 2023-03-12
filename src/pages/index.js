//ИМПОРТ====================================================================================================

//Для подключения css к webpack
import '../pages/index.css';

//Импорт классов
import { Section } from '../components/Section.js';
import { Card } from '../components/Card.js';
import { PopupWithImage } from '../components/PopupWithImage.js';
import { PopupWithForm } from '../components/PopupWithForm.js';
import { PopupWithConfirmation } from '../components/PopupWithConfirmation';
import { UserInfo } from '../components/UserInfo.js';
import { FormValidator } from '../components/FormValidator.js';
import { Api } from '../components/Api';

//ФУНКЦИИ====================================================================================================

const openEditPopup = () => {
    popupEditProfile.open();
    const user = profile.getUserInfo();
    inputName.value = user.name;
    inputJob.value = user.about;
    validatorEditProfile.resetValidation();
}

const openAddPopup = () => {
    popupAddCard.open();
    validatorAddCard.resetValidation();
}

const openAvaPopup = () => {
    popupUpdateAvatar.open();
    const user = profile.getUserInfo();
    validatorUpdateAvatar.resetValidation();
}

const createCard = (img, template) => {
    const oberver = profile.getUserInfo();
    const newCard =  new Card (img, oberver, template, handleCardClick, handleLikeCard, handleDeleteCard);
    const cardElement = newCard.generateCard();
    return cardElement;
}

const handleProfileForm = ( formValues ) => {
    popupEditProfile.isLoading('Сохранение...');
    api.editProfile({
        name: formValues[inputName.name], 
        about: formValues[inputJob.name]
    })
    .then( data => {
        profile.setUserInfo(data);
        popupEditProfile.close();
    })
    .catch(err => {console.log(err)})
    .finally( () => {popupEditProfile.isLoading()} );

}

const handleNewAvaForm = ( formValues ) => {
    popupUpdateAvatar.isLoading('Сохранение...');
    api.editAvatar({
        avatar: formValues[inputAvaLink.name]
    })
    .then( data => {
        profile.setUserAvatar(data);
        popupUpdateAvatar.close();
    })
    .catch(err => {console.log(err)})
    .finally( () => {popupUpdateAvatar.isLoading()} );
}

const handleNewCardForm = ( formValues ) => {
    const img = { name: formValues[inputPicName.name], link: formValues[inputPicLink.name] };
    popupAddCard.isLoading('Создание...');
    api.addNewCard(img)
        .then(data => {
            const cardToRender = createCard(data, '.gallery__template');    
            gallerySection.addItem(cardToRender, false);
            popupAddCard.close();
        })
        .catch(err => {console.log(err)})
        .finally( () => {popupAddCard.isLoading()} );
}

const handleCardClick = (name, link) => {
    popupSpreadPic.open(name, link);
}

const handleLikeCard = (card) => {
    const user = profile.getUserInfo();
    const likes = card.getLikesArray();
    const status = likes.includes(user._id);
    const cardId = card.getCardId();
    if (status) {
        api.deleteLikeToCard(cardId)
            .then(data => { card.updateCard(data) })
            .catch(err => {console.log(err)});
    } else {
        api.addLikeToCard(cardId)
            .then(data => { card.updateCard(data) })
            .catch(err => {console.log(err)});
    }
}

const handleDeleteCard = (card) => {
    popupConfirmDelete.open(card);
}

const handleApproveDelete = (card) => {
    popupConfirmDelete.isLoading('Удаление...');
    const user = profile.getUserInfo();
    const cardId = card.getCardId();
    if (user._id === card.getOwnerId()) {
        api.deleteCard(cardId)
        .then( data => {
            card.deleteCard(cardId);
            popupConfirmDelete.close();
        })
        .catch(err => {console.log(err)})
        .finally( () => {popupConfirmDelete.isLoading()} );
    }
}

//ПЕРМЕННЫЕ=========================================================================================================

//Объекты
const validationConfig = {
    formSelector: '.popup__form',
    inputSelector: '.popup__input',
    submitButtonSelector: '.popup__button',
    inactiveButtonClass: 'popup__button_disabled',
    inputErrorClass: 'popup__input_type_error',
    errorClass: 'popup__error_visible'
};

//Подключаем классы
//API
const api = new Api({
    baseUrl: 'https://mesto.nomoreparties.co/v1/cohort-61',
    headers: {
      authorization: '44fbd263-dcc3-40dc-bdca-15d93dcff4a4',
      'Content-Type': 'application/json'
    }
});

//Рендеринг карточек в галерее
const gallerySection = new Section({
    renderer: (img) => {
        const newCard = createCard(img, '.gallery__template');
        gallerySection.addItem(newCard);
    }
}, '.gallery');

//Попапы
const popupEditProfile = new PopupWithForm('.popup_type_edit', handleProfileForm );
const popupAddCard = new PopupWithForm('.popup_type_add', handleNewCardForm );
const popupUpdateAvatar = new PopupWithForm('.popup_type_ava', handleNewAvaForm );
const popupSpreadPic = new PopupWithImage('.popup_type_pic');
const popupConfirmDelete = new PopupWithConfirmation('.popup_type_delete', handleApproveDelete );

//Валидаторы форм
const validatorEditProfile = new FormValidator (validationConfig, popupEditProfile.getPopupType().querySelector('.popup__form'));
const validatorAddCard = new FormValidator (validationConfig, popupAddCard.getPopupType().querySelector('.popup__form'));
const validatorUpdateAvatar = new FormValidator (validationConfig, popupUpdateAvatar.getPopupType().querySelector('.popup__form'));

//Профиль пользователя
const profile = new UserInfo({
    profileNameSelector: '.profile__name',
    profileAboutSelector: '.profile__about',
    profileAvatarSelector: '.profile__avatar' 
});

//Переменные - элементы страницы
const buttonOpenEditPopup = document.querySelector('.profile__edit-button');
const buttonOpenNewCardPopup = document.querySelector('.profile__add-button');
const buttonOpenNewAvaPopup = document.querySelector('.profile__avatar');
const inputName = validatorEditProfile.getFormElement().querySelector('.popup__input_type_name');
const inputJob = validatorEditProfile.getFormElement().querySelector('.popup__input_type_job');
const inputPicName = validatorAddCard.getFormElement().querySelector('.popup__input_type_pic-name');
const inputPicLink = validatorAddCard.getFormElement().querySelector('.popup__input_type_pic-link');
const inputAvaLink = validatorUpdateAvatar.getFormElement().querySelector('.popup__input_type_ava-link');

//СКРИПТ==============================================================================================================
//Обновляю профиль -> пропадают знаки удаления
//Подгружаем имя - аватар - описание пользователя (текущее)
api.getUserInfo()
    .then(data => {
        profile.setUserInfo(data);
        profile.setUserAvatar(data);
        api.getInitialCards()
        .then((data) => {gallerySection.renderItems(data)})
        .catch(err => {console.log(err)});
    })
    .catch(err => {console.log(err)});

//Включаем валидаторы форм
validatorEditProfile.enableValidation();
validatorAddCard.enableValidation();
validatorUpdateAvatar.enableValidation();

//Слушаем события - открытие
buttonOpenEditPopup.addEventListener('click', openEditPopup);
buttonOpenNewCardPopup.addEventListener('click', openAddPopup);
buttonOpenNewAvaPopup.addEventListener('click', openAvaPopup);





