const Employee = require("../lib/Employee");

describe("Employee", () => {
  describe("Initialization", () => {
    // Positive test
    it("should create an employee with the name that was passed to it", () => {
      // Arrange
      const newEmployee = new Employee("aj", 0, "@@@");

      // Assert
      expect(newEmployee.name).toEqual("aj");
    });
  });
});
