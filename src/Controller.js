class Controller {

    constructor (view, model) {
        this._model = model;
        this._view = view;

        this.init();
    }

    init = () => {
        this._view.init();
    }
}

export default Controller;