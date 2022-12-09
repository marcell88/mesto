let editButton = document.querySelector(".profile__edit-button");
let popup = document.querySelector(".popup");
let form = document.querySelector(".popup__form");
let closePopup = document.querySelector(".popup__close");
let inputName = document.querySelector(".popup__name");
let inputJob = document.querySelector(".popup__job");


// Обработчик «отправки» формы, хотя пока она никуда отправляться не будет
function handleFormSubmit (evt) {
    evt.preventDefault(); // Эта строчка отменяет стандартную отправку формы.
                                                // Так мы можем определить свою логику отправки.
                                                // О том, как это делать, расскажем позже.

    // Получите значение полей jobInput и nameInput из свойства value
    let name = inputName.value;
    let job = inputJob.value;

    // Выберите элементы, куда должны быть вставлены значения полей
    // Вставьте новые значения с помощью textContent
    document.querySelector(".profile__name").textContent = name;
    document.querySelector(".profile__about").textContent = job;

    popup.classList.remove('popup_displayed');
}

//Копируем изначальное описание в форму
inputName.value = document.querySelector(".profile__name").textContent.trim();
inputJob.value = document.querySelector(".profile__about").textContent.trim();

//Слушаем - открытие формы
editButton.addEventListener('click', () => {
    popup.classList.add('popup_displayed');

    //Слушаем submit
    form.addEventListener('submit', handleFormSubmit);

    //Слушаем - закрытие формы
    closePopup.addEventListener('click', () => {
        popup.classList.remove('popup_displayed');
    });       

});