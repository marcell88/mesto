export class UserInfo {

    constructor( {profileNameSelector, profileAboutSelector, profileAvatarSelector} ) {
        this._user = {};
        this._profileName = document.querySelector(profileNameSelector);
        this._profileAbout = document.querySelector(profileAboutSelector);
        this._profileAvatar = document.querySelector(profileAvatarSelector);
    }

    getUserInfo() {
        return this._user;         
    }

    setUserInfo(user) {
        this._user = user;
        this._profileName.textContent = user.name;
        this._profileAbout.textContent = user.about;
    }

    setUserAvatar(user) {
        this._profileAvatar.setAttribute('alt', 'Фото профиля');
        this._profileAvatar.setAttribute('src', user.avatar);
    }

}