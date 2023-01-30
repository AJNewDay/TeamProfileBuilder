const Employee = require("./Employee");

class Manager extends Employee {
  constructor(name, id, email, salary) {
    super(name, id, email);
    this.salary = salary;
  }
  // remeber the get methods
  getSalary() {
    return this.salary;
  }
}
module.exports = Manager;
