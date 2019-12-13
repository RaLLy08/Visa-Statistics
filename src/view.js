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

    createInputs = array => {
        let inputs = [];

        array.forEach(object => {
            const input = document.createElement('input');
            input.setAttribute('type', (object.type || 'text'));
            input.setAttribute('placeholder', object.placeholder);
            object.id && (input.setAttribute('id', object.id));
            object.class && (input.classList.add(object.class));
            object.value && (input.setAttribute('value', object.value));
            object.required && (input.required = 'required');

            inputs.push(input);
        });

        return inputs;
    }
}

export default View;