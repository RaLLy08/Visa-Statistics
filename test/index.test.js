import View from "../src/View";

describe('buttonCreating', () => {
    let view = null;

    beforeEach(() => {
        view = new View();
    });

    it('should return id , name', () => {
        const expected = document.createElement('button');
        expected.id = 'generate';
        expected.textContent = 'Generate';

        const actual = view.buttonCreating('generate', 'Generate');

        expect(expected).toEqual(actual);
    });

    it('should return id , name', () => {
        const expected = document.createElement('button');
        expected.id = 'simulate';
        expected.textContent = 'Simulate';

        const actual = view.buttonCreating('simulate', 'Simulate');

        expect(expected).toEqual(actual);
    });

    it('should return id , name', () => {
        const expected = document.createElement('button');
        expected.id = 'addHuman';
        expected.textContent = 'AddHuman';

        const actual = view.buttonCreating('addHuman', 'AddHuman');

        expect(expected).toEqual(actual);
    });
});

describe('inputsCreating', () => {
    let view = null;

    beforeEach(() => {
        view = new View();
    });

    it('should return []', () => {
        const array = [{type:'text', name:'firstName', placeholder:'number'}];
        const fakeArr = [];
        const input = document.createElement('input');
        input.type = 'text';
        input.setAttribute('value', '');
        input.name = 'firstName';
        input.placeholder = 'number';
        fakeArr.push(input);
        const expected = fakeArr;

        const actual = view.inputsCreating(array);

        expect(expected).toEqual(actual);
    });
});

describe('lightsCreating', () => {
    let view = null;

    beforeEach(() => {
        view = new View();
    });

    it('should return tag ul, li', () => {
        const how = 1;
        const ul = document.createElement('ul');
        const li = document.createElement('li');
        const id = 'tbody';

        ul.append(li);
        ul.classList.add('indicator__lights');
        ul.id = id;
        
        const actual = view.lightsCreating(how, id);

        expect(ul).toEqual(actual);
    });
    
    it('should return tag ul, li, li', () => {
        const how = 2;
        const ul = document.createElement('ul');
        const li = document.createElement('li');
        const li2 = document.createElement('li');
        const id = 'tbody';

        ul.append(li, li2);
        ul.classList.add('indicator__lights');
        ul.id = id;

        const actual = view.lightsCreating(how, id);

        expect(ul).toEqual(actual);
    });
    
    it('should return tag ul, li, li', () => {
        const how = 2;
        const ul = document.createElement('ul');
        const li = document.createElement('li');
        const li2 = document.createElement('li');
        const id = 'tbody';

        ul.append(li, li2);
        ul.classList.add('indicator__lights');
        ul.id = id;

        const actual = view.lightsCreating(how, id);

        expect(ul).toEqual(actual);
    });
});

