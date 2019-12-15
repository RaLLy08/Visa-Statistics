class Controller {
    constructor(view, model) {
        this._model = model;
        this._view = view;

        this.init();
    }

    init = () => {
        this._view.init();
        
    }

    createRandomPersons = inputs => {
        for (let i = 0; i < inputs.value; i++ ) {
            let age = Math.floor(Math.random() * (inputs.maxAge - inputs.minAge) + inputs.minAge);
            let health = Math.floor(Math.random() * (inputs.maxHealth - inputs.minHealth) + inputs.minHealth);
            let money = Math.floor(Math.random() * (inputs.maxMoney - inputs.minMoney) + inputs.minMoney);
            let offenses = Math.floor(Math.random() * (inputs.maxOffenses - inputs.minOffenses) + inputs.minOffenses);
            
            this.createPerson(age, health, money, offenses, i);
        }
        
        this.refreshTable();
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
        this.refreshTable();
    }

    lightsChanging = (index, departament, section, failed = true) => {   
        let rowAndStr = +(`${departament}` + `${index}`);
        
        this._view.changeLightColor(rowAndStr, section, failed); 
    }

    refreshTable = () => {
        this._view.rowsConstucting(this._model.getPersons());
    }
}

export default Controller;