import './style.scss';
import View from './view';
import Model from './Model';
import Controller from './Controller';

const init = () => {
    const view = new View();
    const model = new Model();
    const controller =  new Controller(view, model);
}

init();

