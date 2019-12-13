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

    buttonCreate (id, name) {
        const button = document.createElement('button');
        button.id = id;
        button.textContent = name;

        return button;
    }
}

export default View;