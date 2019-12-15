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

        const generatorInputs = this.createInputs([
            {type: 'number', placeholder: 'number of people', required: true }, 
            {type: 'number', placeholder: 'min age', required: true }, 
            {type: 'number', placeholder: 'max age', required: true }, 
            {type: 'text', placeholder: 'min health', required: true },
            {type: 'text', placeholder: 'max health', required: true },
            {type: 'number', placeholder: 'min money', required: true },
            {type: 'number', placeholder: 'max money', required: true },
            {type: 'number', placeholder: 'min offenses', required: true },
            {type: 'number', placeholder: 'max offenses', required: true }
        ]);

        const simInputs = this.createInputs([
            {type: 'number', placeholder: 'Min age'}, 
            {type: 'text', placeholder: 'Min health'}, 
            {type: 'number', placeholder: 'Max offenses'},
            {type: 'number', placeholder: 'Min money'},
            {type: 'number', placeholder: 'Max money'}
        ]);

        wrapperGenerator.append(...generatorInputs);
        wrapperSimulator.append(...simInputs);
        
        const buttonGenerator = this.buttonCreate('generate', 'Generate');
        wrapperGenerator.append(buttonGenerator);
        
        const buttonSimulator = this.buttonCreate('simulate', 'Simulate');
        wrapperSimulator.append(buttonSimulator);

        const wrapperAddHuman = document.createElement('div');
        wrapperAddHuman.classList.add('wrapper__add-human');
        wrapper.append(wrapperAddHuman);

        const wrapperTableList = document.createElement('div');
        wrapperTableList.classList.add('wrapper__table-list');
        wrapper.append(wrapperTableList);

        const tableListTable = document.createElement('table');
        tableListTable.classList.add('table-list__table');
        wrapperTableList.append(tableListTable);

        const tableHead = document.createElement('thead');
        tableListTable.append(tableHead);

        const headTr = document.createElement('tr');
        tableHead.append(headTr);

        const TdCard = document.createElement('th');
        const TdDepPol = document.createElement('th');
        const TdDepMed = document.createElement('th');
        const TdDepFin = document.createElement('th');
        const TdDepPass = document.createElement('th');
        const TdDepGav = document.createElement('th');

        TdCard.innerText = 'User Card';
        TdDepPol.innerText = 'Police Department';
        TdDepMed.innerText = 'Medical Department';
        TdDepFin.innerText = 'Finance Department';
        TdDepPass.innerText = 'Passport Office';
        TdDepGav.innerText = 'Embassy';
        headTr.append(TdCard);
        headTr.append(TdDepPol);
        headTr.append(TdDepMed);
        headTr.append(TdDepFin);
        headTr.append(TdDepPass);
        headTr.append(TdDepGav);

        this._root.append(wrapper);
    }

    buttonCreate = (id, name) => {
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

    createLights = (how, id) => {
        const lights = document.createElement('ul');
        lights.setAttribute('id', id);
        lights.classList.add('indicator__lights');
        
        for (let i = 0; i < how; i++) {
            const round = document.createElement('li');
            lights.append(round);
        }

        return lights;
    }

    changeLightColor = (whichId, childNode, color = true) => {
        const which = document.getElementById(whichId).childNodes[childNode - 1];

        color ? which.style.backgroundColor = '#33ff00' : which.style.backgroundColor = '#ff2626';
    }
}

export default View;