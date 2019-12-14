class Controller {

    constructor (view, model) {
        this._model = model;
        this._view = view;

        this.init();
    }

    init = () => {
        this._view.init();
        this.setRandomConfig(10);
    }

    setRandomConfig = (value, inputs) => {
        for (let i = 0; i < value; i++ ) {
            let age = Math.floor(Math.random() * (inputs.maxAge - inputs.minAge) + inputs.minAge);
            let health = Math.floor(Math.random() * (inputs.maxHealth - inputs.minHealth) + inputs.minHealth);
            let money = Math.floor(Math.random() * (inputs.maxMoney - inputs.minMoney) + inputs.minMoney);
            let offenses = Math.floor(Math.random() * (inputs.maxOffenses - inputs.minOffenses) + inputs.minOffenses);
            console.log(i);
            
            this.createPerson(age, health, money, offenses, i);
        }
    }

   
}

export default Controller;