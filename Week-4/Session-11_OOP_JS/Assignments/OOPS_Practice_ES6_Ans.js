// Section 1 - Inheritance
class Vehicle {
  constructor(make, model, year, color) {
    this.make = make;
    this.model = model;
    this.year = year;
    this.color = color;
  }

  drive() {
    console.log(`Driving ${this.make} ${this.model}.`);
  }
}

class Car extends Vehicle {
  constructor(make, model, year, color, numSeats) {
    super(make, model, year, color);
    this.numSeats = numSeats;
  }
}

class RideShareCar extends Car {
  constructor(make, model, year, color, numSeats, isAvailable) {
    super(make, model, year, color, numSeats);
    this.isAvailable = isAvailable;
  }
}

const vehicle = new Vehicle("Toyota", "Camry", 2021, "Red");
vehicle.drive();

const car = new Car("Honda", "Accord", 2022, "Blue", 5);
car.drive();

const rideShareCar = new RideShareCar(
  "Tesla",
  "Model 3",
  2023,
  "White",
  4,
  true
);
rideShareCar.drive();

// Section 2 - Polymorphism
class Shape {
  calculateArea() {
    return 0;
  }
}

class Rectangle extends Shape {
  constructor(width, height) {
    super();
    this.width = width;
    this.height = height;
  }

  calculateArea() {
    return this.width * this.height;
  }
}

class Triangle extends Shape {
  constructor(base, height) {
    super();
    this.base = base;
    this.height = height;
  }

  calculateArea() {
    return (this.base * this.height) / 2;
  }
}

class Circle extends Shape {
  constructor(radius) {
    super();
    this.radius = radius;
  }

  calculateArea() {
    return Math.PI * this.radius * this.radius;
  }
}

const rectangle = new Rectangle(5, 8);
console.log(rectangle.calculateArea()); // Output: 40

const triangle = new Triangle(6, 10);
console.log(triangle.calculateArea()); // Output: 30

const circle = new Circle(4);
console.log(circle.calculateArea()); // Output: 50.26548245743669

// Section 3 - Abstraction and Encapsulation
class BankAccount {
  #accountNumber;
  #balance;
  #accountHolderName;

  constructor(accountNumber, balance, accountHolderName) {
    this.#accountNumber = accountNumber;
    this.#balance = balance;
    this.#accountHolderName = accountHolderName;
  }

  depositAmount(amount) {
    this.#balance += amount;
  }

  withdrawAmount(amount, type) {
    if (type == "checking") {
      this.#balance -= amount;
    } else if (this.#balance - amount > 0) {
      this.#balance -= amount;
    }
  }

  getBalanceAmount() {
    return this.#balance;
  }
}

class CheckingAccount extends BankAccount {
  constructor(accountNumber, balance, accountHolderName) {
    super(accountNumber, balance, accountHolderName);
  }

  deposit(amount) {
    this.depositAmount(amount);
  }

  withdraw(amount) {
    this.withdrawAmount(amount, "checking");
  }
}

var checkingAccount = new CheckingAccount(123, 100, "checking account holder");

console.log(checkingAccount.getBalanceAmount());

checkingAccount.deposit(50);
console.log(checkingAccount.getBalanceAmount());
console.log(checkingAccount.getBalanceAmount());
checkingAccount.withdraw(100);
console.log(checkingAccount.getBalanceAmount());

class SavingsAccount extends BankAccount {
  constructor(accountNumber, balance, accountHolderName) {
    super(accountNumber, balance, accountHolderName);
  }

  deposit(amount) {
    this.depositAmount(amount);
  }

  withdraw(amount) {
    this.withdrawAmount(amount, "savings");
  }
}

var savingsAccount = new SavingsAccount(124, 100, "savings account holder");

console.log(savingsAccount.getBalanceAmount());
savingsAccount.deposit(50);
console.log(savingsAccount.getBalanceAmount());
console.log(savingsAccount.getBalanceAmount());
savingsAccount.withdraw(100);
console.log(savingsAccount.getBalanceAmount());
console.log(savingsAccount.getBalanceAmount());
savingsAccount.withdraw(150);
console.log(savingsAccount.getBalanceAmount());
