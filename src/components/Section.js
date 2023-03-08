export class Section {

    constructor( {items, renderer} , selector) {
        this._initialArray = items;
        this._renderer = renderer;
        this._container = document.querySelector(selector);
    }

    addItem(element) {
        this._container.prepend(element);
    }

    renderItems() {
        console.log(this._initialArray);
        this._initialArray.forEach(item => {
            console.log(item.name);
            this._renderer(item);
        });
    }

}