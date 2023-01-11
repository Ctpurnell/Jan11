const Employee = require('../lib/Employee');

describe('employee', () => {
    const newEmployee = {
        name: 'Chris',
        id: 201,
        email: 'ctp0941@gmail.com',
    };

describe('constructor tests', () => {
    test('creates an employee', () => {
        const employee = new Employee(newEmployee);
        expect(employee).toBeInstanceOf(Employee);
    });
    test('creates a new employee with a name, id and email', () => {
        const employee = new Employee(newEmployee);
        expect(employee).toEqual( {
            name: 'Chris',
            id: 201,
            email: 'ctp0941@gmail.com',
        });
    }); 
});
describe('method test', () => {
    test('returns an id when the method is called', () => {
        const employee = new Employee(newEmployee);
        expect(employee.getId()).toEqual(201);
    });

    test('returns a name when the method is called', () => {
        const employee = new Employee(newEmployee);
        expect(employee.getName()).toEqual('Chris');
    });

    test('returns an email when the method is called', () => {
        const employee = new Employee(newEmployee);
        expect(employee.getEmail()).toEqual('ctp0941@gmail.com');
    });
});
});

