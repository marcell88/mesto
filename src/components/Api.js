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

}