/**
 * Protecting the object
 */

const person = {};

Object.defineProperty(person, "name", {
  value: "John Doe",
  writable: false,
});

Object.defineProperty(person, "age", {
  value: 13,
  writable: true,
});

Object.defineProperty(person, "email", {
  value: "johndoe@example.com",
  writable: false,
});

Object.defineProperty(person, "getAge", {
  value: function () {
    return this.age;
  },
});

Object.defineProperty(person, "setAge", {
  value: function (age) {
    this.age = age;
  },
});

// Testing the person object
console.log(person.name); // Output: "John Doe"
console.log(person.email); // Output: "johndoe@example.com"

person.name = "Jane Doe"; // Attempt to modify read-only property
console.log(person.name); // Output: "John Doe" (unchanged)

person.email = "janedoe@example.com"; // Attempt to modify read-only property
console.log(person.email); // Output: "johndoe@example.com" (unchanged)

console.log(person.getAge()); // Output: undefined

person.setAge(30);
console.log(person.getAge()); // Output: 30

/**
 * =================================================================================================================
 */

/**
 * Prototype
 */

// Vehicle object
function Vehicle(make, model, year) {
  this.make = make;
  this.model = model;
  this.year = year;
}

// Method added using prototype
Vehicle.prototype.getDetails = function () {
  return `Make: ${this.make}, Model: ${this.model}, Year: ${this.year}`;
};

// Car subclass extending Vehicle
function Car(make, model, year, numDoors) {
  Vehicle.call(this, make, model, year);
  this.numDoors = numDoors;
}

// Inheriting prototype methods from Vehicle
Car.prototype = Object.create(Vehicle.prototype);

// Overriding getDetails() method in Car
Car.prototype.getDetails = function () {
  return `${Vehicle.prototype.getDetails.call(this)}, Number of Doors: ${
    this.numDoors
  }`;
};

// Creating instances of Vehicle and Car
const vehicle = new Vehicle("Toyota", "Camry", 2021);
const car = new Car("Honda", "Accord", 2022, 4);

// Calling getDetails() method on each instance
console.log(vehicle.getDetails());
console.log(car.getDetails());
