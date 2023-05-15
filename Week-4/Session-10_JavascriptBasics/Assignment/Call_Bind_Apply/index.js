class Calculator {
  add(num1, num2) {
    return num1 + num2;
  }

  subtract(num1, num2) {
    return num1 - num2;
  }

  multiply(num1, num2) {
    return num1 * num2;
  }

  divide(num1, num2) {
    if (num2 === 0) {
      throw new Error("Cannot divide by zero");
    }
    return num1 / num2;
  }
}

class ScientificCalculator extends Calculator {
  square(num) {
    return num * num;
  }
  cube(num) {
    num * num * num;
  }
  power(pow, num) {
    return Math.pow(num, pow);
  }
}

const myScCalc = new ScientificCalculator();
console.log(myScCalc.add.call(this, 2, 3));
console.log(myScCalc.subtract.call(this, 10, 5));

const multiplyByTwo = myScCalc.multiply.bind(this, 2);
console.log(multiplyByTwo(5));

const powerOfThree = myScCalc.power.bind(this, 3);
console.log(powerOfThree(2));
