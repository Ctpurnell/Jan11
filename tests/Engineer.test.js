const Engineer = require('../lib/Engineer');

describe('Engineer', () => {
    const newEngineer = {
        name: 'Chris',
        id: 201,
        email: 'ctp0941@gmail.com',
        gitHub: 'Ctpurnell@github.com',
    };

describe('constructor tests', () => {
    test('creates an engineer', () => {
        const engineer = new Engineer(newEngineer);
        expect(engineer).toBeInstanceOf(Engineer);
    });
    test('creates a new engineer with a name, id and email and gitHub', () => {
        const engineer = new Engineer(newEngineer);
        expect(engineer).toEqual( {
            name: 'Chris',
            id: 201,
            email: 'ctp0941@gmail.com',
            gitHub: 'Ctpurnell@github.com',
        });
    }); 
});
describe('method test', () => {
    test('returns an id when the method is called', () => {
        const engineer = new Engineer(newEngineer);
        expect(engineer.getId()).toEqual(201);
    });

    test('returns a name when the method is called', () => {
        const engineer = new Engineer(newEngineer);
        expect(engineer.getName()).toEqual('Chris');
    });

    test('returns an email when the method is called', () => {
        const engineer = new Engineer(newEngineer);
        expect(engineer.getEmail()).toEqual('ctp0941@gmail.com');
    });
    test('returns a github profile when the method is called', () => {
        const engineer = new Engineer(newEngineer);
        expect(engineer.getGithub()).toEqual('Ctpurnell@github.com');
    });
    test('returns a role when the method is called', () => {
        const engineer = new Engineer(newEngineer);
        expect(engineer.getRole()).toEqual('Engineer');
    });
    });
});
