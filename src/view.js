class View {
    constructor() {
        this._root = document.getElementById('root');
        this.tableBody = null;
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

        const generatorInputs = this.inputsCreating([
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

        const simInputs = this.inputsCreating([
            {type: 'number', placeholder: 'Min age'}, 
            {type: 'text', placeholder: 'Min health'}, 
            {type: 'number', placeholder: 'Max offenses'},
            {type: 'number', placeholder: 'Min money'},
            {type: 'number', placeholder: 'Max money'}
        ]);

        const addInputs = this.inputsCreating([
            {type: 'text', placeholder: 'Name', required: true},
            {type: 'text', placeholder: 'Surname', required: true},
            {type: 'radio', value: 'male', name: 'gender', text: 'Male'},
            {type: 'radio', value: 'female', name: 'gender', text: 'Female'},
            {type: 'number', placeholder: 'Age', required: true},
            {type: 'text', placeholder: 'Health', required: true},
            {type: 'number', placeholder: 'Money', required: true},
            {type: 'number', placeholder: 'Offenses', required: true},
        ]);

        wrapperGenerator.append(...generatorInputs);
        wrapperSimulator.append(...simInputs);
        wrapperAddHuman.append(...addInputs);

        const buttonGenerator = this.buttonCreating('generate', 'Generate');

        wrapperGenerator.append(buttonGenerator);
        
        const buttonSimulator = this.buttonCreating('simulate', 'Simulate');

        wrapperSimulator.append(buttonSimulator);

        const buttonAddPeople = this.buttonCreating('add-person', 'Add Person');

        wrapperAddHuman.append(buttonAddPeople);

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

        this.tableBody = this.tableBodyCreate('persons__list');
        tableListTable.append(this.tableBody);
        
        this._root.append(wrapper);
    }

    buttonCreating = (id, name) => {
        const button = document.createElement('button');

        button.id = id;
        button.textContent = name;

        return button;
    }

    inputsCreating = array => {
        let inputs = [];

        array.forEach(object => {
            const input = document.createElement('input');

            input.setAttribute('type', (object.type || 'text'));
            object.placeholder && input.setAttribute('placeholder', object.placeholder);
            object.id && (input.setAttribute('id', object.id));
            object.class && (input.classList.add(object.class));
            object.value && (input.setAttribute('value', object.value));
            object.required && (input.required = 'required');
            object.name && (input.setAttribute('name', object.name));

            inputs.push(input);
            
            if (object.type === 'radio') {
                const label = document.createElement('label');

                label.innerText = object.text;

                inputs.push(label);
            }
        });

        return inputs;
    }

    tableBodyCreate = id => {
        const tableBody = document.createElement('tbody');

        tableBody.id = id;
    
        return tableBody;
    }

    tableBodyRemove = id => {
        const tableBody = document.getElementById(id);
        
        tableBody.remove();
    }

    rowsConstucting = array => {
        array.forEach(person => {
            const row = document.createElement('tr');
            const userCard = document.createElement('td');
            
            userCard.innerText = `Age:${person.age}, ${person.FandLName}, health:${person.health}%, money:${person.money}$, offenses:${person.offenses}, gender:${person.gender}` + person.index; 
            const policeDep = document.createElement('td');

            policeDep.append(this.lightsCreating(2, +('1' + `${person.index}`)));
            const medicalDep = document.createElement('td');

            medicalDep.append(this.lightsCreating(2, +('2' + `${person.index}`)));
            const financeDep = document.createElement('td');

            financeDep.append(this.lightsCreating(2, +('3' + `${person.index}`)));
            const passportDep = document.createElement('td');

            passportDep.append(this.lightsCreating(2, +('4' + `${person.index}`)));
            const embassy = document.createElement('td');

            embassy.append(this.lightsCreating(1, +('5' + `${person.index}`)));

            const personRow = [userCard, policeDep, medicalDep, financeDep, passportDep, embassy];

            row.append(...personRow);
            this.tableBody.append(row);
        });
    }
    
    lightsCreating = (how, id) => {
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
        const which = document.getElementById(whichId);

        for (let i = 0; i < childNode; i++) {
            which.childNodes[i].style.backgroundColor = '#33ff00';   
        }

        if(!color) {
            which.childNodes[childNode - 1].style.backgroundColor = '#ff2626';
        }
    }
}

export default View;