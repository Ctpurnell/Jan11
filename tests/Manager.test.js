const Manager = require("../lib/Manager");

describe("Manager", () => {
  const newManager = {
    name: "Chris",
    id: 201,
    email: "ctp0941@gmail.com",
    officeNumber: 150,
  };

  describe("constructor tests", () => {
    test("creates an Manager", () => {
      const manager = new Manager(newManager);
      expect(manager).toBeInstanceOf(Manager);
    });
    test("creates a new Manager with a name, id and email and office number", () => {
      const manager = new Manager(newManager);
      expect(intern).toEqual({
        name: "Chris",
        id: 201,
        email: "ctp0941@gmail.com",
        officeNumber: 150,
        role: "Manager",
      });
    });
  });
  describe("method test", () => {
    test("returns an id when the method is called", () => {
      const manager = new Manager(newManager);
      expect(manager.getId()).toEqual(201);
    });

    test("returns a name when the method is called", () => {
      const manager = new Manager(newManager);
      expect(manager.getName()).toEqual("Chris");
    });

    test("returns an email when the method is called", () => {
      const manager = new Manager(newManager);
      expect(manager.getEmail()).toEqual("ctp0941@gmail.com");
    });
    test("returns a github profile when the method is called", () => {
      const manager = new Manager(newManager);
      expect(manager.getOfficeNumber()).toEqual(150);
    });
    test("returns a role when the method is called", () => {
      const manager = new Manager(newManager);
      expect(manager.getRole()).toEqual("Manager");
    });
  });
});
