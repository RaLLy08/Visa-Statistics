class Controller {

    constructor (view, model) {
        this._model = model;
        this._view = view;

        this.init();
    }

    init = () => {
        this._view.init();
        
    }

    setRandomConfig = (value, inputs) => {
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
            age: age,
            health: health,
            money: money,
            offenses: offenses,
            FandLname: "",
            departament: 0,
            section: 0,
            passed: 0,
            index: i,
        }
        this._model.addPerson(person);
    }
}

export default Controller;