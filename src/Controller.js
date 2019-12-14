class Controller {

    constructor (view, model) {
        this._model = model;
        this._view = view;

        this.init();
    }

    init = () => {
        this._view.init();
    }

    setRandomConfig = (value, minAge, maxAge, minHealth, maxHealth, minMoney, maxMoney, minOffenses, maxOffenses) => {
        for (let i = 0; i >= value; index++) {
            age = Math.floor(Math.random() * (maxAge - minAge) + minAge);
            health = Math.floor(Math.random() * (maxHealth - minHealth) + minHealth);
            money = Math.floor(Math.random() * (maxMoney - minMoney) + minMoney);
            offenses = Math.floor(Math.random() * (maxOffenses - minOffenses) + minOffenses);
            this.createPerson(age, health, money, offenses);
        }
    }
}

export default Controller;