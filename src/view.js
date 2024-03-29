/* eslint-disable no-undef */
class View {
    constructor() {
        this._root = document.getElementById('root');
        this.tableListTable = null;
        this.tableBody = null;
    }
    
    init = () => {
        const wrapper = document.createElement('div');

        wrapper.classList.add('wrapper');

        const wrapperControllers = document.createElement('div');

        wrapperControllers.classList.add('wrapper__controllers');
        wrapper.append(wrapperControllers);
        
        const controllersGenerator = document.createElement('div');

        controllersGenerator.classList.add('controllers__generator');
        wrapperControllers.append(controllersGenerator);

        const generatorForm = document.createElement('form');

        generatorForm.id = 'genForm';
        controllersGenerator.append(generatorForm);

        const controllersSimulator = document.createElement('div');

        controllersSimulator.classList.add('controllers__simulator');
        wrapperControllers.append(controllersSimulator);

        const simulatorForm = document.createElement('form');

        simulatorForm.id = 'simForm';
        controllersSimulator.append(simulatorForm);

        const controllersAddHuman = document.createElement('div');

        controllersAddHuman.classList.add('controllers__add-human');
        wrapperControllers.append(controllersAddHuman);

        const addHumanForm = document.createElement('form');

        addHumanForm.id = 'addHumanForm';
        controllersAddHuman.append(addHumanForm);

        const generatorInputs = this.inputsCreating([
            {type: 'number', name: 'numOfPeople', placeholder: 'Number of people', required: true }, 
            {type: 'number', name: 'minAge', placeholder: 'Min age', required: true }, 
            {type: 'number', name: 'maxAge', placeholder: 'Max age', required: true }, 
            {type: 'number', name: 'minHealth', placeholder: 'Min health', required: true },
            {type: 'number', name: 'maxHealth', placeholder: 'Max health', required: true },
            {type: 'number', name: 'minMoney', placeholder: 'Min money', required: true },
            {type: 'number', name: 'maxMoney', placeholder: 'Max money', required: true },
            {type: 'number', name: 'minOffenses', placeholder: 'Min offenses', required: true },
            {type: 'number', name: 'maxOffenses', placeholder: 'Max offenses', required: true }
        ]);

        const simInputs = this.inputsCreating([
            {type: 'number', name: 'minAge', placeholder: 'Min age'}, 
            {type: 'number', name: 'minHealth', placeholder: 'Min health'}, 
            {type: 'number', name: 'maxOffenses', placeholder: 'Max offenses'},
            {type: 'number', name: 'minMoney', placeholder: 'Min money'},
            {type: 'number', name: 'maxMoney', placeholder: 'Max money'}
        ]);

        const addInputs = this.inputsCreating([
            {type: 'text', name: 'firstName', placeholder: 'Name', required: true},
            {type: 'text', name: 'lastName', placeholder: 'Surname', required: true},
            {type: 'radio', value: 'male', name: 'gender', text: 'Male'},
            {type: 'radio', value: 'female', name: 'gender', text: 'Female'},
            {type: 'number', name: 'age', placeholder: 'Age', required: true},
            {type: 'number', name: 'health', placeholder: 'Health', required: true},
            {type: 'number', name: 'money', placeholder: 'Money', required: true},
            {type: 'number', name: 'offenses', placeholder: 'Offenses', required: true},
        ]);

        generatorForm.append(...generatorInputs);
        simulatorForm.append(...simInputs);
        addHumanForm.append(...addInputs);

        const buttonGenerator = this.buttonCreating('generate', 'Generate');

        generatorForm.append(buttonGenerator);
        
        const buttonSimulator = this.buttonCreating('simulate', 'Simulate');

        simulatorForm.append(buttonSimulator);

        const buttonAddPeople = this.buttonCreating('addHuman', 'Add Person');

        addHumanForm.append(buttonAddPeople);

        const wrapperTableList = document.createElement('div');

        wrapperTableList.classList.add('wrapper__table-list');
        wrapper.append(wrapperTableList);

        this.tableListTable = document.createElement('table');

        this.tableListTable.classList.add('table-list__table');
        wrapperTableList.append(this.tableListTable);

        const tableHead = document.createElement('thead');

        this.tableListTable.append(tableHead);

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
            object.id && (input.setAttribute('id', object.id));
            object.class && (input.classList.add(object.class));
            object.value ? input.setAttribute('value', object.value) : input.setAttribute('value', '');
            object.name && (input.setAttribute('name', object.name));
            object.placeholder && input.setAttribute('placeholder', object.placeholder);
            object.required && (input.required = 'required');
            
            if (!(object.type === 'radio')){
                inputs.push(input);
            } else {
                const check = document.createElement('div');
                
                check.setAttribute('class', 'check');
                const label = document.createElement('label');

                label.innerText = object.text;
                
                check.append(input);
                check.append(label);

                inputs.push(check);
            }
        });

        return inputs;
    }

    tableBodyCreate = id => {
        this.tableBody = document.createElement('tbody');

        this.tableBody.id = id;
    
        this.tableListTable.append(this.tableBody);
    }

    tableBodyRemove = id => {
        const tableBody = document.getElementById(id);
        
        tableBody.remove();
    }

    rowsConstucting = array => {
        array.forEach(person => {
            const row = document.createElement('tr');
            const userCard = document.createElement('td');

            userCard.id = `${person.index}user`;
            userCard.innerText = `Age: ${person.age}, ${person.FandLname}, Health: ${person.health}%, Money: ${person.money}$, Offenses: ${person.offenses}, Gender: ${person.gender}`; 
            const policeDep = document.createElement('td');

            policeDep.append(this.lightsCreating(2, +('1' + `${person.index}`)));
            policeDep.append(this.sectionTitleCreating(2, ['Crime check', 'Signature of document']));
            const medicalDep = document.createElement('td');

            medicalDep.append(this.lightsCreating(2, +('2' + `${person.index}`)));
            medicalDep.append(this.sectionTitleCreating(2, ['Paperwork', 'Health check']));
            const financeDep = document.createElement('td');

            financeDep.append(this.lightsCreating(2, +('3' + `${person.index}`)));
            financeDep.append(this.sectionTitleCreating(2, ['Min amount check', 'Max amount check']));
            const passportDep = document.createElement('td');

            passportDep.append(this.lightsCreating(2, +('4' + `${person.index}`)));
            passportDep.append(this.sectionTitleCreating(2, ['Paperwork', 'Age check']));
            const embassy = document.createElement('td');

            embassy.append(this.lightsCreating(1, +('5' + `${person.index}`)));
            embassy.append(this.sectionTitleCreating(1, ['Visa issuance']));

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

    sectionTitleCreating = (how, texts) => {
        const section = document.createElement('ul');

        for (let i = 0; i < how; i++) {
            const sectionName = document.createElement('li');

            sectionName.innerText = texts[i];

            section.append(sectionName);
        }

        return section;
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
    
    onSubmitGenerate = callback => {
        generate.onclick = e => {
            e.preventDefault();

            if (genForm.checkValidity()) {
                let map = new Map();

                for (let i = 0; i < genForm.elements.length - 1; i++) {
                    map.set(genForm.elements[i].name, +genForm.elements[i].value);
                }

                let genObj = Object.fromEntries(map.entries());

                callback(genObj);
            } else {
                alert('Please fill all section');
            }
        };
    }

    onSubmitSimulate = callback => {
        simulate.onclick = e => {
            e.preventDefault();

            if (simForm.checkValidity()) {
                let map = new Map();

                for (let i = 0; i < simForm.elements.length - 1; i++) {
                    map.set(simForm.elements[i].name, +simForm.elements[i].value);
                }

                let simObj = Object.fromEntries(map.entries());
                let checkEmpty = 0;

                for (const key in simObj) {
                    checkEmpty += simObj[key];
                }

                checkEmpty ? callback(simObj) : callback(false);
            }
        };
    }

    onSubmitAddHuman = callback => {
        addHuman.onclick = e => {
            e.preventDefault();

            if (addHumanForm.checkValidity()) {
                let map = new Map();

                for (let i = 0; i < addHumanForm.elements.length - 1; i++) {
                    let val;

                    addHumanForm.elements[i].type === 'number' ? val = +addHumanForm.elements[i].value : val = addHumanForm.elements[i].value;
                    
                    if (addHumanForm.elements[i].name === 'gender' && !addHumanForm.elements[i].checked) {
                        continue;
                    }

                    map.set(addHumanForm.elements[i].name, val);
                }

                let addHumanObj = Object.fromEntries(map.entries());

                callback(addHumanObj);
            } else {
                alert('Please fill all section');
            }
        };
    }
    
    markPerson = id => {
        document.getElementById(`${id}user`).style.border = '1px solid #FF9305';
    }
}

export default View;