class Model {
    constructor() {
        this._persons = [];
    }

    clearAll = () => {
        this._persons = [];
    }

    getPersons = () => {
        return this._persons;
    }

    addPerson = (person) => {
        this._persons.push(person);
    }

}

export default Model;