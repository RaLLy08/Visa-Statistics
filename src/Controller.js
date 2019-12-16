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
        
        this._view.onSubmitGenerate(this.addRandomPersons);
        this._view.onSubmitSimulate(el => console.log(el));
        this._view.onSubmitAddHuman(this.addOnePerson);

    }

    addRandomPersons = inputs => { //получаем готовый массив
        this.clearPersons();

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

    addOnePerson = inputs => {
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

    clearPersons = () => {
        this._model.clearAll();
    }

    policeFirstSection = (inputs, simulate = false) => {
        let maxOffenses = Math.floor(Math.random() * 10);
        let time = Math.floor(Math.random() * 9000 + 1000);
        
        simulate && (maxOffenses = simulate.maxOffenses);
                         
        new Promise((resolve, reject) => {
            if (inputs.offenses > maxOffenses) {
                setTimeout(() => reject(new Error()), time); 
            } else {
                setTimeout(() => resolve(), time); 
            }
        }, inputs).then(() => { 
            this.lightsChanging(inputs.index, 1, 1);
            this.policeSecondSection(inputs, simulate);
        }).catch(() => {
            this.lightsChanging(inputs.index, 1, 1, false);
        });
        
    }

    policeSecondSection = (inputs, simulate = false) => {
        let time = Math.floor(Math.random() * 9000 + 1000);
                         
        new Promise((resolve) => {
            setTimeout(() => resolve(), time); 
        }, inputs).then(() => { 
            this.lightsChanging(inputs.index, 1, 2);
            this.hospitalSecondSection(inputs, simulate);
        });
        
    }

    bankFirstSection = (inputs, simulate = false) => {
        let minMoney = Math.floor(Math.random() * 500 + 500);
        let time = Math.floor(Math.random() * 9000 + 1000);

        simulate && (minMoney = simulate.minMoney);
                                        
        new Promise((resolve, reject) => {
            if (inputs.money < minMoney) {
                setTimeout(() => reject(new Error()), time); 
            } else {
                setTimeout(() => resolve(), time); 
            }
        }, inputs).then(() => { 
            this.lightsChanging(inputs.index, 3, 1);
            this.bankSecondSection(inputs, simulate);
        }).catch(() => {
            this.lightsChanging(inputs.index, 3, 1, false);
        });
        
    }

    bankSecondSection = (inputs, simulate) => {
        let maxMoney = Math.floor(Math.random() * 5000 + 5000);
        let time = Math.floor(Math.random() * 9000 + 1000);

        simulate && (maxMoney = simulate.maxMoney);
                                   
        new Promise((resolve, reject) => {
            if (inputs.money > maxMoney) {
                setTimeout(() => reject(new Error()), time); 
            } else {
                setTimeout(() => resolve(), time); 
            }
        }, inputs).then(() => { 
            this.lightsChanging(inputs.index, 3, 2);
            //переход к следующему департаменту(inputs, simulate);
        }).catch(() => {
            this.lightsChanging(inputs.index, 3, 2, false);
        });
        
    }

}

export default Controller;
//минимум для банка рандом 500 - 1000 максимум 5000-10000