export class Api {
    
    constructor(options) {
        this._baseUrl = options.baseUrl;
        this._token = options.headers.authorization;
        this._contentType = options.headers['Content-Type'];
    }

    getUserInfo() {
        return fetch(this._baseUrl + '/users/me', {
            method: 'GET',
            headers: {
                authorization: this._token
            }
        })
        .then( res => {
            return res.ok
                ? res.json()
                : Promise.reject(`>>>> Ошибка - инфо о пользователе: ${res.status}`);
        });
    }

    getInitialCards() {
        return fetch(this._baseUrl + '/cards', {
            method: 'GET',
            headers: {
                authorization: this._token
            }
        })
        .then( res => {
            return res.ok
                ? res.json()
                : Promise.reject(`>>>> Ошибка - предустановленные картинки: ${res.status}`);
        });
    }

    editProfile({name, about}) {
        return fetch(this._baseUrl + '/users/me', {
            method: 'PATCH',
            headers: {
                authorization: this._token,
                'Content-Type': this._contentType
            },
            body: JSON.stringify({
                name: name,
                about: about
            })
        })
        .then( res => {
            return res.ok
                ? res.json()
                : Promise.reject(`>>>> Ошибка - изменение профиля: ${res.status}`);
        });
    }

    editAvatar({avatar}) {
        return fetch(this._baseUrl + '/users/me/avatar', {
            method: 'PATCH',
            headers: {
                authorization: this._token,
                'Content-Type': this._contentType
            },
            body: JSON.stringify({
                avatar: avatar
            })
        })
        .then( res => {
            return res.ok
                ? res.json()
                : Promise.reject(`>>>> Ошибка - изменение аватара: ${res.status}`);
        });
    }

    addNewCard({name, link}) {
        return fetch(this._baseUrl + '/cards', {
            method: 'POST',
            headers: {
                authorization: this._token,
                'Content-Type': this._contentType
            },
            body: JSON.stringify({
                name: name,
                link: link
            })
        })
        .then( res => {
            return res.ok
                ? res.json()
                : Promise.reject(`>>>> Ошибка - добавление карточки: ${res.status}`);
        });
    }

    deleteCard(cardId) {
        return fetch(this._baseUrl + '/cards/' + cardId, {
            method: 'DELETE',
            headers: {
                authorization: this._token,
            }
        })
        .then( res => {
            return res.ok
                ? res.json()
                : Promise.reject(`>>>> Ошибка - удаление карточки: ${res.status}`);
        });
    }

    addLikeToCard(cardId) {
        return fetch(this._baseUrl + '/cards/' + cardId + '/likes', {
            method: 'PUT',
            headers: {
                authorization: this._token,
            }
        })
        .then( res => {
            return res.ok
                ? res.json()
                : Promise.reject(`>>>> Ошибка - добавление лайка: ${res.status}`);
        });
    }

    deleteLikeToCard(cardId) {
        return fetch(this._baseUrl + '/cards/' + cardId + '/likes', {
            method: 'DELETE',
            headers: {
                authorization: this._token,
            }
        })
        .then( res => {
            return res.ok
                ? res.json()
                : Promise.reject(`>>>> Ошибка - удаление лайка: ${res.status}`);
        });
    }


}