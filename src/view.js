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

        const simInputs = this.createInputs([
            {type: 'number', placeholder: 'Min age'}, 
            {type: 'text', placeholder: 'Min health'}, 
            {type: 'number', placeholder: 'Max offenses'},
            {type: 'number', placeholder: 'Min money'},
            {type: 'number', placeholder: 'Max money'}
        ]);
        wrapperSimulator.append(...simInputs);

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