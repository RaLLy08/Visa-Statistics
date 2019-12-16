class Model {
    constructor() {
        this._persons = [];
        this._conditions = {minAge: 18, minHealth: 30, maxOffsens: 3, minMoney: 5000, maxMoney: 10000};
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

    setPersons = (array) => {
        this._persons = array;
    }

    changePerson = (person, index) => {
        this._persons.splice(index, 1, person);
    }
}
export default Model;