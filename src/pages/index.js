//ИМПОРТ====================================================================================================

//Для подключения css к webpack
import '../pages/index.css';

//Импорт классов
import { Section } from '../components/Section.js';
import { Card } from '../components/Card.js';
import { PopupWithImage } from '../components/PopupWithImage.js';
import { PopupWithForm } from '../components/PopupWithForm.js';
import { UserInfo } from '../components/UserInfo.js';
import { FormValidator } from '../components/FormValidator.js';
import { Api } from '../components/Api';



//ФУНКЦИИ====================================================================================================

//Открытие попапа для редактирования профиля
const openEditPopup = () => {
    popupEdit.open();
    const user = profile.getUserInfo();
    inputName.value = user.name;
    inputJob.value = user.about;
    formProfile.resetValidation();
}

//Открытие попапа для добавления карточки
const openAddPopup = () => {
    popupAdd.open();
    formPic.resetValidation();
}

const createCard = (img, template) => {
    const newCard =  new Card (img, template, handleCardClick, handleLikeCard, handleDeleteCard);
    const cardElement = newCard.generateCard();
    if (profile.getUserInfo()._id === newCard.getOwnerId()) {newCard.displayDelete()}
    newCard.updateColorOfHeart(profile.getUserInfo());
    return cardElement;
}

//Обработка отправки формы профилдя
const handleProfileForm = ( formValues ) => {
    api.editProfile({
        name: formValues[inputName.name], 
        about: formValues[inputJob.name]
    }).then( data => {
        profile.setUserInfo({
            name: data.name, 
            about: data.about
        });
    }).catch(err => {console.log(err)});
}

//Обработка отправки формы новой каритинки
const handleNewCardForm = ( formValues ) => {
    const img = { name: formValues[inputPicName.name], link: formValues[inputPicLink.name] };
    api.addNewCard(img)
        .then(data => {
            const cardToRender = createCard(data, '.gallery__template');    
            gallerySection.addItem(cardToRender, false);
        }).catch(err => {console.log(err)});
}

//Обработка открытия карточки с каринкой
const handleCardClick = (name, link) => {
    popupPic.open(name, link);
}

const handleLikeCard = (card) => {
    const user = profile.getUserInfo();
    const likes = card.getLikesArray();
    const status = likes.includes(user._id);
    const cardId = card.getId();
    if (status) {
        //Есть лайк => удаляем лайк
        api.deleteLikeToCard(cardId)
            .then(data => {
                card.updateCard(data);
                card.updateColorOfHeart(user);

            })
            .catch(err => {console.log(err)});
    } else {
        //Нет лайка => добавляем лайк
        api.addLikeToCard(cardId)
            .then(data => { 
                card.updateCard(data);
                card.updateColorOfHeart(user);

            })
            .catch(err => {console.log(err)});
    }
}

const handleDeleteCard = (card) => {
    const user = profile.getUserInfo();
    const cardId = card.getId();

    if (user._id === card.getOwnerId()) {
        api.deleteCard(cardId)
        .then( data => {card.deleteCard()})
        .catch(err => {console.log(err)});
    }

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
const popupEdit = new PopupWithForm('.popup_type_edit', handleProfileForm );
const popupAdd = new PopupWithForm('.popup_type_add', handleNewCardForm );
const popupPic = new PopupWithImage('.popup_type_pic');

//Валидаторы форм
const formProfile = new FormValidator (objectOfSettings, popupEdit.getPopupType().querySelector('.popup__form'));
const formPic = new FormValidator (objectOfSettings, popupAdd.getPopupType().querySelector('.popup__form'));

//Профиль пользователя
const profile = new UserInfo({
    profileNameSelector: '.profile__name',
    profileAboutSelector: '.profile__about',
    profileAvatarSelector: '.profile__avatar' 
});


//Переменные - элементы страницы
const buttonOpenEditPopup = document.querySelector('.profile__edit-button');
const buttonOpenNewCardPopup = document.querySelector('.profile__add-button');
const inputName = formProfile.getFormElement().querySelector('.popup__input_type_name');
const inputJob = formProfile.getFormElement().querySelector('.popup__input_type_job');
const inputPicName = formPic.getFormElement().querySelector('.popup__input_type_pic-name');
const inputPicLink = formPic.getFormElement().querySelector('.popup__input_type_pic-link');



//СКРИПТ======================================s=======================================================================

//Подгружаем имя - аватар - описание пользователя (текущее)
api.getUserInfo()
    .then(data => {
        profile.setUserInfo(data);
        profile.setUserAvatar(data);
    })
    .catch(err => {console.log(err)});

//Подгружаем начальные карточки
api.getInitialCards()
    .then((data) => {gallerySection.renderItems(data)})
    .catch(err => {console.log(err)});

//Включаем валидаторы форм
formProfile.enableValidation();
formPic.enableValidation();

//Слушаем события - открытие
buttonOpenEditPopup.addEventListener('click', openEditPopup);
buttonOpenNewCardPopup.addEventListener('click', openAddPopup);






