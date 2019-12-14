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
            {type: 'number', placeholder: '2', required: true }, 
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

        // const tableBody = document.createElement('tbody'); // другая задача блокировала мою, это макет.
        // tableListTable.append(tableBody);
        // [
        //     {age: 12, health: 80, money: 500, offenses: 3, 
        //     FandLName: 'Vasiya Pupkin', departaments: 0, section: 0, passed: 0, index: 0,
        //     gender: 'man'},
        //     {age: 37, health: 90, money: 500, offenses: 3, 
        //     FandLName: 'Asya Pupkina', departaments: 0, section: 0, passed: 1, index: 0,
        //     gender: 'woman'}
        // ] такой массив будет принимат constructRow([array])

        const rows = this.consructRows(array);
        tableBody.append(...rows);

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
            object.name && (input.setAttribute('name', object.name));
            object.text && (input.innerText = object.text);
            
            inputs.push(input);
        });

        return inputs;
    }

    consructRows = array => {
        let persons = [];

        array.forEach(person => {
            let row = document.createElement('tr');
            let userCard = document.createElement('td');
            userCard.innerText = `Age:${person.age}, ${person.FandLName}, health:${person.health}%, money:${person.money}$, gender:${person.gender}`;
            person.passed === 1 && (userCard.style.border = '1px solid #FF9305'); 
            persons.push(userCard);
            let policeDep = document.createElement('td');
            policeDep.append(this.createLights(2, 1));
            let medicalDep = document.createElement('td');
            medicalDep.append(this.createLights(2, 2));
            let financeDep = document.createElement('td');
            financeDep.append(this.createLights(2, 3));
            let passportDep = document.createElement('td');
            passportDep.append(this.createLights(2, 4));
            let embassy = document.createElement('td');
            embassy.append(this.createLights(1, 5));
            persons.push(row, userCard, policeDep, medicalDep, financeDep, passportDep, embassy);
        });
                       
        return persons;
    }
}

export default View;