export class Section {

    constructor( {renderer} , selector) {
        this._renderer = renderer;
        this._container = document.querySelector(selector);
    }

    addItem(element, position = true) {
        position
            ? this._container.append(element)
            : this._container.prepend(element);
    }

    renderItems(items) {
        this._initialArray = items;
        items.forEach(item => {
            this._renderer(item);
        });
    }

}