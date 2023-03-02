export class UserInfo {

    constructor( {profileNameSelector, profileAboutSelector} ) {
        this._profileName = document.querySelector(profileNameSelector);
        this._profileAbout = document.querySelector(profileAboutSelector);
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

}