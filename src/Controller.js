import Facerator from 'fakerator'; 

class Controller {
    constructor(view, model) {
        this._model = model;
        this._view = view;
        this._fakerator = new Facerator;

        this.init();
    }

    init = () => {
        this._view.init();
        
        this._view.onSubmitGenerate(this.createRandomPersons);
        this._view.onSubmitSimulate(el => console.log(el));
        this._view.onSubmitAddHuman(this.createOnePerson);
    }

    createRandomPersons = inputs => {

        for (let i = 0; i < inputs.numOfPeople; i++ ) {
            let age = Math.floor(Math.random() * (inputs.maxAge - inputs.minAge) + inputs.minAge);
            let health = Math.floor(Math.random() * (inputs.maxHealth - inputs.minHealth) + inputs.minHealth);
            let money = Math.floor(Math.random() * (inputs.maxMoney - inputs.minMoney) + inputs.minMoney);
            let offenses = Math.floor(Math.random() * (inputs.maxOffenses - inputs.minOffenses) + inputs.minOffenses);
            let gender = ['male', 'female'][Math.floor(Math.random() * 2)];
            let FandLname = '';

            if (gender === 'female') {
                FandLname = this._fakerator.names.nameF();
            } else {
                FandLname = this._fakerator.names.nameM();
            }
            
            this.createPerson(age, health, money, offenses, gender, FandLname, i);
        }
        
        this.refreshTable();
    }

    createPerson = (age, health, money, offenses, gender, FandLname, i) => {
        let person = {
            FandLname: FandLname,
            gender: gender,
            age: age,
            health: health,
            money: money,
            offenses: offenses,
            index: i
        };

        this._model.addPerson(person);
    }

    createOnePerson = inputs => {
        let index = this._model.getPersons().length;

        let FandLname = `${inputs.firstName}` + ` ${inputs.lastName}`;

        this.createPerson(inputs.age, inputs.health, inputs.money, inputs.offenses, inputs.gender, FandLname, index);
        
        this.refreshTable();
    }

    lightsChanging = (index, departament, section, failed = true) => {   
        let rowAndStr = +(`${departament}` + `${index}`);
        
        this._view.changeLightColor(rowAndStr, section, failed); 
    }

    refreshTable = () => {
        this._view.tableBodyRemove('persons__list');
        this._view.tableBodyCreate('persons__list');
        this._view.rowsConstucting(this._model.getPersons());
    }

}

export default Controller;