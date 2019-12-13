class View {
    constructor() {
        this._root = document.getElementById('root');
    }

    init = () => {
        const wrapper = document.createElement('div');
        wrapper.classList.add('wrapper');
        
        const wrapperGenerator = document.createElement('div');
        wrapperGenerator.classList.add('wrapper__generator');
        wrapper.append(wrapperGenerator);

        const wrapperSimulator = document.createElement('div');
        wrapperSimulator.classList.add('wrapper__simulator');
        wrapper.append(wrapperSimulator);

        const simInputAge = this.createInput({placeholder: 'Min age', id: 'minAge', classes: ['simulator__input']});
        wrapperSimulator.append(simInputAge);

        const simInputHealth = this.createInput({placeholder: 'Min Health', id: 'minHealth', classes: ['simulator__input']});
        wrapperSimulator.append(simInputHealth);

        const simInputOffense = this.createInput({placeholder: 'Max Offense', id: 'maxOffense', classes: ['simulator__input']});
        wrapperSimulator.append(simInputOffense);

        const simInputMoneyMin = this.createInput({placeholder: 'Min Money', id: 'minMoney', classes: ['simulator__input']});
        wrapperSimulator.append(simInputMoneyMin);

        const simInputMoneyMax = this.createInput({placeholder: 'Max Money', id: 'maxMoney', classes: ['simulator__input']});
        wrapperSimulator.append(simInputMoneyMax);

        const simButton = this.buttonCreate('simulate', 'Simulate');
        wrapperSimulator.append(simButton);

        const wrapperAddHuman = document.createElement('div');
        wrapperAddHuman.classList.add('wrapper__add-human');
        wrapper.append(wrapperAddHuman);

        const wrapperTableList = document.createElement('div');
        wrapperTableList.classList.add('wrapper__table-list');
        wrapper.append(wrapperTableList);

        const tableListTable = document.createElement('table');
        tableListTable.classList.add('table-list__table');
        wrapperTableList.append(tableListTable);

        this._root.append(wrapper);
    }

    buttonCreate (id, name) {
        const button = document.createElement('button');
        button.id = id;
        button.textContent = name;

        return button;
    }
}

export default View;