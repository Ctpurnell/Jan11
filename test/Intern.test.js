const Intern = require('../lib/Intern');

describe('Intern', () => {
    const newIntern = {
        name: 'Chris',
        id: 201,
        email: 'ctp0941@gmail.com',
        gitHub: 'Ctpurnell@github.com',
    };

describe('constructor tests', () => {
    test('creates an Intern', () => {
        const intern = new Intern(newIntern);
        expect(intern).toBeInstanceOf(Intern);
    });
    test('creates a new engineer with a name, id and email and office number', () => {
        const intern = new Intern(newIntern);
        expect(intern).toEqual( {
            name: 'Chris',
            id: 201,
            email: 'ctp0941@gmail.com',
            gitHub: 'Ctpurnell@github.com',
            role: 'Intern',
        });
    }); 
});
describe('method test', () => {
    test('returns an id when the method is called', () => {
        const intern = new Intern(newIntern);
        expect(intern.getId()).toEqual(201);
    });

    test('returns a name when the method is called', () => {
        const intern = new Intern(newIntern);
        expect(intern.getName()).toEqual('Chris');
    });

    test('returns an email when the method is called', () => {
        const intern = new Intern(newIntern);
        expect(intern.getEmail()).toEqual('ctp0941@gmail.com');
    });
    test('returns a github profile when the method is called', () => {
        const intern = new Intern(newIntern);
        expect(intern.getGithub()).toEqual('Ctpurnell@github.com');
    });
    test('returns a role when the method is called', () => {
        const intern = new Intern(newIntern);
        expect(intern.getRole()).toEqual('Engineer');
    });
    });
});
