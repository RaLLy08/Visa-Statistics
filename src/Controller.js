class Controller {
    constructor(view, model) {
        this._model = model;
        this._view = view;

        this.init();
    }

    init = () => {
        this._view.init();
        
    }

    createRandomPersons = (value, inputs) => {
        for (let i = 0; i < value; i++ ) {
            let age = Math.floor(Math.random() * (inputs.maxAge - inputs.minAge) + inputs.minAge);
            let health = Math.floor(Math.random() * (inputs.maxHealth - inputs.minHealth) + inputs.minHealth);
            let money = Math.floor(Math.random() * (inputs.maxMoney - inputs.minMoney) + inputs.minMoney);
            let offenses = Math.floor(Math.random() * (inputs.maxOffenses - inputs.minOffenses) + inputs.minOffenses);
            
            this.createPerson(age, health, money, offenses, i);
        }
        this._view(this._model.getPersons());
    }

    createPerson = (age, health, money, offenses, i) => {
        let person = {
            FandLname: '',
            gender: '',
            age: age,
            health: health,
            money: money,
            offenses: offenses,
            index: i,
        };

        this._model.addPerson(person);
    }

    createOnePerson = inputs => {
        let index = this._model.getPersons().length;

        this.createPerson(inputs.age, inputs.health, inputs.money, inputs.offenses, index);
        this._view(this._model.getPersons());
    }

    lightsChanging = (index, departament, section, failed = true) => {   
        let rowAndStr = +(`${departament}` + `${index}`);
        
        this._view.changeLightColor(rowAndStr, section, failed);
        
    }
}

export default Controller;