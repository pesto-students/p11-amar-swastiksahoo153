function calcWordFrequencies() {
  const input = prompt("Enter input: ");
  const freqMap = {};
  input.split(" ").map((e) => {
    if (freqMap[e]) {
      freqMap[e]++;
    } else {
      freqMap[e] = 1;
    }
  });
  console.log(freqMap);
}
