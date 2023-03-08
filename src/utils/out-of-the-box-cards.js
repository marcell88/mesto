import { Api } from "../components/Api";

export const initialCards = [];

const api = new Api({
  baseUrl: 'https://mesto.nomoreparties.co/v1/cohort-61',
  headers: {
    authorization: '44fbd263-dcc3-40dc-bdca-15d93dcff4a4',
    'Content-Type': 'application/json'
  }
});

api.getInitialCards()
.then(data => {
    data.forEach( item => {initialCards.push(item)})
})
.catch(err => {console.log(err)});