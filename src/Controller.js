import Facerator from 'fakerator'; 

class Controller {
    constructor(view, model) {
        this._model = model;
        this._view = view;
        this._fakerator = new Facerator;
        this._passed = 0;

        this.init();
    }

    init = () => {
        this._view.init();
        
        this._view.onSubmitGenerate(this.addRandomPersons);
        this._view.onSubmitSimulate(this.startSimulation);
        this._view.onSubmitAddHuman(this.addOnePerson);

    }

    startSimulation = (simulate) => {
        let array = this._model.getPersons();

        array.forEach(element => {
            this.policeFirstSection(element, simulate);
        });
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
            this.hospitalFirstSection(inputs, simulate);
        });
    }

    hospitalFirstSection = (inputs, simulate = false) => {
        let time = Math.floor(Math.random() * 9000 + 1000);
                         
        new Promise((resolve) => {
            setTimeout(() => resolve(), time); 
        }, inputs).then(() => { 
            this.lightsChanging(inputs.index, 2, 1);
            this.hospitalSecondSection(inputs, simulate);
        });
    }

    hospitalSecondSection = (inputs, simulate = false) => {
        let minHealth = Math.floor(Math.random() * 20 + 30);
        let time = Math.floor(Math.random() * 9000 + 1000);
        
        simulate && (minHealth = simulate.minHealth);
                         
        new Promise((resolve, reject) => {
            if (inputs.health < minHealth) {
                setTimeout(() => reject(new Error()), time); 
            } else {
                setTimeout(() => resolve(), time); 
            }
        }, inputs).then(() => { 
            this.lightsChanging(inputs.index, 2, 2);
            this. bankFirstSection(inputs, simulate);
        }).catch(() => {
            this.lightsChanging(inputs.index, 2, 2, false);
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

    bankSecondSection = (inputs, simulate = false) => {
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
            this.passportFirstSection(inputs, simulate);
        }).catch(() => {
            this.lightsChanging(inputs.index, 3, 2, false);
        });
        
    }

    passportFirstSection = (inputs, simulate = false) => {
        let time = Math.floor(Math.random() * 9000 + 1000);
                         
        new Promise((resolve) => {
            setTimeout(() => resolve(), time); 
        }, inputs).then(() => { 
            this.lightsChanging(inputs.index, 4, 1);
            this.passportSecondSection(inputs, simulate);
        });
    }

    passportSecondSection = (inputs, simulate = false) => {
        let minAge = Math.floor(Math.random() * 5000 + 5000);
        let time = Math.floor(Math.random() * 9000 + 1000);

        simulate && (minAge = simulate.minAge);
                                   
        new Promise((resolve, reject) => {
            if (inputs.age < minAge) {
                setTimeout(() => reject(new Error()), time); 
            } else {
                setTimeout(() => resolve(), time); 
            }
        }, inputs).then(() => { 
            this.lightsChanging(inputs.index, 4, 2);
            this.embassyVisa(inputs);
        }).catch(() => {
            this.lightsChanging(inputs.index, 4, 2, false);
        });
    }
    
    embassyVisa = (inputs) => {
        let time = Math.floor(Math.random() * 9000 + 1000);

        this._passed += 1;
        setTimeout(() => {
            if (this._passed === 1) {
                this.markPerson(inputs.index);
            }
            this.lightsChanging(inputs.index, 5, 1);
        }, time); 
    }

    markPerson = (index) => {
        this._view.markPerson(index);
    }
}   

export default Controller;
