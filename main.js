(()=>{"use strict";function t(e){return t="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(t){return typeof t}:function(t){return t&&"function"==typeof Symbol&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t},t(e)}function e(e,r){for(var n=0;n<r.length;n++){var o=r[n];o.enumerable=o.enumerable||!1,o.configurable=!0,"value"in o&&(o.writable=!0),Object.defineProperty(e,(void 0,i=function(e,r){if("object"!==t(e)||null===e)return e;var n=e[Symbol.toPrimitive];if(void 0!==n){var o=n.call(e,"string");if("object"!==t(o))return o;throw new TypeError("@@toPrimitive must return a primitive value.")}return String(e)}(o.key),"symbol"===t(i)?i:String(i)),o)}var i}var r=function(){function t(e,r){var n=e.items,o=e.renderer;!function(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}(this,t),this._initialArray=n,this._renderer=o,this._container=document.querySelector(r)}var r,n;return r=t,(n=[{key:"addItem",value:function(t){this._container.prepend(t)}},{key:"renderItems",value:function(){var t=this;this._initialArray.forEach((function(e){t._renderer(e)}))}}])&&e(r.prototype,n),Object.defineProperty(r,"prototype",{writable:!1}),t}();function n(t){return n="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(t){return typeof t}:function(t){return t&&"function"==typeof Symbol&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t},n(t)}function o(t,e){for(var r=0;r<e.length;r++){var o=e[r];o.enumerable=o.enumerable||!1,o.configurable=!0,"value"in o&&(o.writable=!0),Object.defineProperty(t,(void 0,i=function(t,e){if("object"!==n(t)||null===t)return t;var r=t[Symbol.toPrimitive];if(void 0!==r){var o=r.call(t,"string");if("object"!==n(o))return o;throw new TypeError("@@toPrimitive must return a primitive value.")}return String(t)}(o.key),"symbol"===n(i)?i:String(i)),o)}var i}var i=function(){function t(e,r,n){!function(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}(this,t),this._name=e.name,this._link=e.link,this._templateSelector=r,this._galleryCard=document.querySelector(r).content.querySelector(".gallery__card"),this._handleCardClick=n}var e,r;return e=t,(r=[{key:"generateCard",value:function(){return this._element=this._getTemplate(),this._deleteButton=this._element.querySelector(".gallery__delete"),this._heartButton=this._element.querySelector(".gallery__heart"),this._picture=this._element.querySelector(".gallery__pic"),this._picText=this._element.querySelector(".gallery__text"),this._picture.setAttribute("alt",this._name),this._picture.setAttribute("src",this._link),this._picText.textContent=this._name,this._setEventListeners(),this._element}},{key:"_getTemplate",value:function(){return this._galleryCard.cloneNode(!0)}},{key:"_setEventListeners",value:function(){var t=this;this._deleteButton.addEventListener("click",(function(e){t._removeCard(e)})),this._heartButton.addEventListener("click",(function(e){t._likeCard(e)})),this._picture.addEventListener("click",(function(){t._handleCardClick(t._name,t._link)}))}},{key:"_removeCard",value:function(t){this._element.remove(),this._element=null}},{key:"_likeCard",value:function(t){t.target.classList.toggle("gallery__heart_active")}}])&&o(e.prototype,r),Object.defineProperty(e,"prototype",{writable:!1}),t}();function u(t){return u="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(t){return typeof t}:function(t){return t&&"function"==typeof Symbol&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t},u(t)}function l(t,e){for(var r=0;r<e.length;r++){var n=e[r];n.enumerable=n.enumerable||!1,n.configurable=!0,"value"in n&&(n.writable=!0),Object.defineProperty(t,(void 0,o=function(t,e){if("object"!==u(t)||null===t)return t;var r=t[Symbol.toPrimitive];if(void 0!==r){var n=r.call(t,"string");if("object"!==u(n))return n;throw new TypeError("@@toPrimitive must return a primitive value.")}return String(t)}(n.key),"symbol"===u(o)?o:String(o)),n)}var o}var a=function(){function t(e){var r=this;!function(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}(this,t),this._popupType=document.querySelector(e),this._closeButton=this._popupType.querySelector(".popup__close"),this._handleSideClickRef=function(t){r._handleSideClick(t)},this._handleEscapePressRef=function(t){r._handleEscapePress(t)},this._handleCloseButtonRef=function(){r.close()}}var e,r;return e=t,(r=[{key:"open",value:function(){this._popupType.classList.add("popup_opened"),this.setEventListeners()}},{key:"close",value:function(){this._popupType.classList.remove("popup_opened"),document.removeEventListener("keydown",this._handleEscapePressRef),this._popupType.removeEventListener("click",this._handleSideClickRef),this._closeButton.removeEventListener("click",this._handleCloseButtonRef)}},{key:"getPopupType",value:function(){return this._popupType}},{key:"setEventListeners",value:function(){document.addEventListener("keydown",this._handleEscapePressRef),this._popupType.addEventListener("click",this._handleSideClickRef),this._closeButton.addEventListener("click",this._handleCloseButtonRef)}},{key:"_handleEscapePress",value:function(t){"Escape"===t.key&&this.close()}},{key:"_handleSideClick",value:function(t){t.target===t.currentTarget&&this.close()}}])&&l(e.prototype,r),Object.defineProperty(e,"prototype",{writable:!1}),t}();function c(t){return c="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(t){return typeof t}:function(t){return t&&"function"==typeof Symbol&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t},c(t)}function s(t,e){for(var r=0;r<e.length;r++){var n=e[r];n.enumerable=n.enumerable||!1,n.configurable=!0,"value"in n&&(n.writable=!0),Object.defineProperty(t,(void 0,o=function(t,e){if("object"!==c(t)||null===t)return t;var r=t[Symbol.toPrimitive];if(void 0!==r){var n=r.call(t,"string");if("object"!==c(n))return n;throw new TypeError("@@toPrimitive must return a primitive value.")}return String(t)}(n.key),"symbol"===c(o)?o:String(o)),n)}var o}function p(){return p="undefined"!=typeof Reflect&&Reflect.get?Reflect.get.bind():function(t,e,r){var n=function(t,e){for(;!Object.prototype.hasOwnProperty.call(t,e)&&null!==(t=y(t)););return t}(t,e);if(n){var o=Object.getOwnPropertyDescriptor(n,e);return o.get?o.get.call(arguments.length<3?t:r):o.value}},p.apply(this,arguments)}function f(t,e){return f=Object.setPrototypeOf?Object.setPrototypeOf.bind():function(t,e){return t.__proto__=e,t},f(t,e)}function y(t){return y=Object.setPrototypeOf?Object.getPrototypeOf.bind():function(t){return t.__proto__||Object.getPrototypeOf(t)},y(t)}var m=function(t){!function(t,e){if("function"!=typeof e&&null!==e)throw new TypeError("Super expression must either be null or a function");t.prototype=Object.create(e&&e.prototype,{constructor:{value:t,writable:!0,configurable:!0}}),Object.defineProperty(t,"prototype",{writable:!1}),e&&f(t,e)}(u,t);var e,r,n,o,i=(n=u,o=function(){if("undefined"==typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Boolean.prototype.valueOf.call(Reflect.construct(Boolean,[],(function(){}))),!0}catch(t){return!1}}(),function(){var t,e=y(n);if(o){var r=y(this).constructor;t=Reflect.construct(e,arguments,r)}else t=e.apply(this,arguments);return function(t,e){if(e&&("object"===c(e)||"function"==typeof e))return e;if(void 0!==e)throw new TypeError("Derived constructors may only return object or undefined");return function(t){if(void 0===t)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return t}(t)}(this,t)});function u(t){var e;return function(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}(this,u),(e=i.call(this,t))._popupPicImage=e._popupType.querySelector(".popup__pic"),e._popupPicText=e._popupType.querySelector(".popup__text"),e}return e=u,(r=[{key:"open",value:function(t,e){this._popupPicImage.setAttribute("alt",t),this._popupPicImage.setAttribute("src",e),this._popupPicText.textContent=t,p(y(u.prototype),"open",this).call(this)}}])&&s(e.prototype,r),Object.defineProperty(e,"prototype",{writable:!1}),u}(a);function _(t){return _="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(t){return typeof t}:function(t){return t&&"function"==typeof Symbol&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t},_(t)}function h(t,e){for(var r=0;r<e.length;r++){var n=e[r];n.enumerable=n.enumerable||!1,n.configurable=!0,"value"in n&&(n.writable=!0),Object.defineProperty(t,(void 0,o=function(t,e){if("object"!==_(t)||null===t)return t;var r=t[Symbol.toPrimitive];if(void 0!==r){var n=r.call(t,"string");if("object"!==_(n))return n;throw new TypeError("@@toPrimitive must return a primitive value.")}return String(t)}(n.key),"symbol"===_(o)?o:String(o)),n)}var o}function v(){return v="undefined"!=typeof Reflect&&Reflect.get?Reflect.get.bind():function(t,e,r){var n=function(t,e){for(;!Object.prototype.hasOwnProperty.call(t,e)&&null!==(t=d(t)););return t}(t,e);if(n){var o=Object.getOwnPropertyDescriptor(n,e);return o.get?o.get.call(arguments.length<3?t:r):o.value}},v.apply(this,arguments)}function b(t,e){return b=Object.setPrototypeOf?Object.setPrototypeOf.bind():function(t,e){return t.__proto__=e,t},b(t,e)}function d(t){return d=Object.setPrototypeOf?Object.getPrototypeOf.bind():function(t){return t.__proto__||Object.getPrototypeOf(t)},d(t)}var S=function(t){!function(t,e){if("function"!=typeof e&&null!==e)throw new TypeError("Super expression must either be null or a function");t.prototype=Object.create(e&&e.prototype,{constructor:{value:t,writable:!0,configurable:!0}}),Object.defineProperty(t,"prototype",{writable:!1}),e&&b(t,e)}(u,t);var e,r,n,o,i=(n=u,o=function(){if("undefined"==typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Boolean.prototype.valueOf.call(Reflect.construct(Boolean,[],(function(){}))),!0}catch(t){return!1}}(),function(){var t,e=d(n);if(o){var r=d(this).constructor;t=Reflect.construct(e,arguments,r)}else t=e.apply(this,arguments);return function(t,e){if(e&&("object"===_(e)||"function"==typeof e))return e;if(void 0!==e)throw new TypeError("Derived constructors may only return object or undefined");return function(t){if(void 0===t)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return t}(t)}(this,t)});function u(t,e){var r;return function(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}(this,u),(r=i.call(this,t))._form=r._popupType.querySelector(".popup__form"),r._inputList=Array.from(r._form.querySelectorAll(".popup__input")),r._handleFormSubmit=function(t){t.preventDefault(),e(r._getInputValues()),r.close()},r}return e=u,(r=[{key:"setEventListeners",value:function(){v(d(u.prototype),"setEventListeners",this).call(this),this._form.addEventListener("submit",this._handleFormSubmit)}},{key:"_getInputValues",value:function(){var t=this;return this._formValues={},this._inputList.forEach((function(e){t._formValues[e.name]=e.value})),this._formValues}},{key:"close",value:function(){v(d(u.prototype),"close",this).call(this),this._form.removeEventListener("submit",this._handleFormSubmit),this._form.reset()}}])&&h(e.prototype,r),Object.defineProperty(e,"prototype",{writable:!1}),u}(a);function g(t){return g="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(t){return typeof t}:function(t){return t&&"function"==typeof Symbol&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t},g(t)}function k(t,e){for(var r=0;r<e.length;r++){var n=e[r];n.enumerable=n.enumerable||!1,n.configurable=!0,"value"in n&&(n.writable=!0),Object.defineProperty(t,(void 0,o=function(t,e){if("object"!==g(t)||null===t)return t;var r=t[Symbol.toPrimitive];if(void 0!==r){var n=r.call(t,"string");if("object"!==g(n))return n;throw new TypeError("@@toPrimitive must return a primitive value.")}return String(t)}(n.key),"symbol"===g(o)?o:String(o)),n)}var o}var w=function(){function t(e){var r=e.profileNameSelector,n=e.profileAboutSelector;!function(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}(this,t),this._profileName=document.querySelector(r),this._profileAbout=document.querySelector(n)}var e,r;return e=t,(r=[{key:"getUserInfo",value:function(){return{profileName:this._profileName.textContent.trim(),profileAbout:this._profileAbout.textContent.trim()}}},{key:"setUserInfo",value:function(t){var e=t.name,r=t.about;this._profileName.textContent=e,this._profileAbout.textContent=r}}])&&k(e.prototype,r),Object.defineProperty(e,"prototype",{writable:!1}),t}();function E(t){return E="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(t){return typeof t}:function(t){return t&&"function"==typeof Symbol&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t},E(t)}function P(t,e){for(var r=0;r<e.length;r++){var n=e[r];n.enumerable=n.enumerable||!1,n.configurable=!0,"value"in n&&(n.writable=!0),Object.defineProperty(t,(void 0,o=function(t,e){if("object"!==E(t)||null===t)return t;var r=t[Symbol.toPrimitive];if(void 0!==r){var n=r.call(t,"string");if("object"!==E(n))return n;throw new TypeError("@@toPrimitive must return a primitive value.")}return String(t)}(n.key),"symbol"===E(o)?o:String(o)),n)}var o}var j=function(){function t(e,r){!function(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}(this,t),this._formSelector=e.formSelector,this._inputSelector=e.inputSelector,this._submitButtonSelector=e.submitButtonSelector,this._inactiveButtonClass=e.inactiveButtonClass,this._inputErrorClass=e.inputErrorClass,this._errorClass=e.errorClass,this._form=r,this._inputList=this._form.querySelectorAll(this._inputSelector),this._buttonElement=this._form.querySelector(this._submitButtonSelector)}var e,r;return e=t,(r=[{key:"enableValidation",value:function(){this._toggleButtonState(),this._setEventListeners()}},{key:"getFormElement",value:function(){return this._form}},{key:"resetValidation",value:function(){var t=this;this._toggleButtonState(),Array.from(this._inputList).forEach((function(e){t._hideError(e)}))}},{key:"_setEventListeners",value:function(){var t=this;Array.from(this._inputList).forEach((function(e){e.addEventListener("input",(function(){t._checkValidity(e)}))}))}},{key:"_checkValidity",value:function(t){t.validity.valid?this._hideError(t):this._showError(t),this._toggleButtonState()}},{key:"_toggleButtonState",value:function(){this._hasInvalidInput(this._inputList)?(this._buttonElement.classList.add(this._inactiveButtonClass),this._buttonElement.setAttribute("disabled",!0)):(this._buttonElement.classList.remove(this._inactiveButtonClass),this._buttonElement.removeAttribute("disabled"))}},{key:"_hasInvalidInput",value:function(t){return Array.from(t).some((function(t){return!t.validity.valid}))}},{key:"_hideError",value:function(t){t.classList.remove(this._inputErrorClass),this._form.querySelector(".".concat(t.id,"-error")).classList.remove(this._errorClass),this._form.querySelector(".".concat(t.id,"-error")).textContent=""}},{key:"_showError",value:function(t){t.classList.add(this._inputErrorClass),this._form.querySelector(".".concat(t.id,"-error")).classList.add(this._errorClass),this._form.querySelector(".".concat(t.id,"-error")).textContent=t.validationMessage}}])&&P(e.prototype,r),Object.defineProperty(e,"prototype",{writable:!1}),t}(),C=function(t,e){return new i(t,e,O).generateCard()},O=function(t,e){R.open(t,e)},T={formSelector:".popup__form",inputSelector:".popup__input",submitButtonSelector:".popup__button",inactiveButtonClass:"popup__button_disabled",inputErrorClass:"popup__input_type_error",errorClass:"popup__error_visible"},L=new r({items:[{name:"Новокузнецк",link:"https://wikiway.com/upload/iblock/f9c/Novokuznetsk-s-vysoty.jpg"},{name:"Академгородок",link:"https://img.geliophoto.com/akadem/02_akadem.jpg"},{name:"Долгопрудный",link:"http://photos.wikimapia.org/p/00/03/06/95/89_big.jpg"},{name:"Москва",link:"https://cdn.mskguru.ru/uploads/flats/4158/kvartry-v-zhk-beregovoj-1534495702.0318_.jpg"},{name:"Лимассол",link:"https://cyprusbutterfly.com.cy/images/all/860x/24754744d999748632bdc37f2c9c83ab.jpg"}],renderer:function(t){var e=C(t,".gallery__template");L.addItem(e)}},".gallery"),q=new S(".popup_type_edit",(function(t){I.setUserInfo({name:t[F.name],about:t[D.name]})})),B=new S(".popup_type_add",(function(t){var e={name:t[U.name],link:t[z.name]},r=C(e,".gallery__template");L.addItem(r)})),R=new m(".popup_type_pic"),A=new j(T,q.getPopupType().querySelector(".popup__form")),x=new j(T,B.getPopupType().querySelector(".popup__form")),I=new w({profileNameSelector:".profile__name",profileAboutSelector:".profile__about"}),V=document.querySelector(".profile__edit-button"),N=document.querySelector(".profile__add-button"),F=A.getFormElement().querySelector(".popup__input_type_name"),D=A.getFormElement().querySelector(".popup__input_type_job"),U=x.getFormElement().querySelector(".popup__input_type_pic-name"),z=x.getFormElement().querySelector(".popup__input_type_pic-link");L.renderItems(),A.enableValidation(),x.enableValidation(),V.addEventListener("click",(function(){q.open();var t=I.getUserInfo(),e=t.profileName,r=t.profileAbout;F.value=e,D.value=r,A.resetValidation()})),N.addEventListener("click",(function(){B.open(),x.resetValidation()}))})();