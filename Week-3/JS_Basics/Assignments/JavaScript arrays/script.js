// Put your solution here
function divideArray(number) {
  const evenNumbers = number.filter((n) => n % 2 === 0);
  const oddNumbers = number.filter((n) => n % 2 === 1);
  evenNumbers.sort();
  oddNumbers.sort();
  console.log(
    "Even numbers:\n" + evenNumbers + "\n" + "Odd numbers:\n" + oddNumbers
  );
}
divideArray([4, 2, 8, 1]);
