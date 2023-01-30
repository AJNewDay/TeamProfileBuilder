class Employee {
  constructor(name, id, email) {
    this.name = name;
    this.id = id;
    this.email = email;
  }
  getName() {
    return this.name;
  }
  // remaining attributes go here
  getId() {
    return this.id;
  }
  getEmail() {
    return this.email;
  }
}
module.exports = Employee;
