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
        if (user.name && user.about) {
            this._user = user;
            this._profileName.textContent = user.name;
            this._profileAbout.textContent = user.about;    
        }
    }

    setUserAvatar(user) {
        if (user.avatar) {
            this._user = user;
            this._profileAvatar.style.backgroundImage = `url('${user.avatar}')`;    
        }
    }

}