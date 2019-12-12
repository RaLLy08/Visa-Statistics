class View {
    constructor() {
        this._root = document.getElementById('root');
    }

    init = () => {
        const wrapper = document.createElement('div');
        wrapper.classList.add('wrapper');
        
        const wrapperFirstBlock = document.createElement('div');
        wrapperFirstBlock.classList.add('wrapper__block-generator');
        wrapper.append(wrapperFirstBlock);

        const wrapperSecondBlock = document.createElement('div');
        wrapperSecondBlock.classList.add('wrapper__block-simulator');
        wrapper.append(wrapperSecondBlock);

        const wrapperThirdBlock = document.createElement('div');
        wrapperThirdBlock.classList.add('wrapper__block-add-human');
        wrapper.append(wrapperThirdBlock);

        const wrapperFourthBlock = document.createElement('div');
        wrapperFourthBlock.classList.add('wrapper__block-table-list');
        wrapper.append(wrapperFourthBlock);

        this._root.append(wrapper);
    }
}

export default View;