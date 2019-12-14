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
        for (let i = 0; i <= value; index++) {
            age = Math.floor(Math.random() * (inputs.maxAge - inputs.minAge) + inputs.minAge);
            health = Math.floor(Math.random() * (inputs.maxHealth - inputs.minHealth) + inputs.minHealth);
            money = Math.floor(Math.random() * (inputs.maxMoney - inputs.minMoney) + inputs.minMoney);
            offenses = Math.floor(Math.random() * (inputs.maxOffenses - inputs.minOffenses) + inputs.minOffenses);
            
            this.createPerson(age, health, money, offenses);
        }
    }
   
}

export default Controller;