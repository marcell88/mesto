export class UserInfo {

    constructor( {profileNameSelector, profileAboutSelector, profileAvatarSelector} ) {
        this._profileName = document.querySelector(profileNameSelector);
        this._profileAbout = document.querySelector(profileAboutSelector);
        this._profileAvatar = document.querySelector(profileAvatarSelector);
    }

    getUserInfo() {
        return { 
            profileName: this._profileName.textContent.trim(), 
            profileAbout: this._profileAbout.textContent.trim()
        }
    }

    setUserInfo({name, about}) {
        this._profileName.textContent = name;
        this._profileAbout.textContent = about;
    }

    setUserAvatar(avatar) {
        this._profileAvatar.setAttribute('alt', 'Фото профиля');
        this._profileAvatar.setAttribute('src', avatar);
    }

}