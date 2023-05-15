function counter() {
  let count = 0;
  function incrementCount() {
    count += 1;
    return count;
  }
  return incrementCount;
}

const firstCounter = counter();
const secondCounter = counter();

const firstValues = [];
const secondValues = [];

for (let i = 0; i < 5; i++) {
  firstValues.push(firstCounter());
}

for (let i = 0; i < 3; i++) {
  secondValues.push(secondCounter());
}

console.log(firstValues, secondValues);
