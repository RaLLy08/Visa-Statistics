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
    }

    createPerson = (age, health, money, offenses, i) => {
        let person = {
            FandLname: '',
            gender: '',
            age: age,
            health: health,
            money: money,
            offenses: offenses,
            departament: 0,
            section: 0,
            passed: 0,
            index: i,
        };

        this._model.addPerson(person);
    }

    lightsChanging = (index, departament, section, failed = true) => {   
        let rowAndStr = +(`${departament}` + `${index}`);
        
        this._view.changeLightColor(rowAndStr, section, failed);
        
    }
}

export default Controller;