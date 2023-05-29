function arrayIterator(array) {
  const nextIndex = 0;

  return {
    [Symbol.iterator]: function () {
      return this;
    },

    next: function () {
      return nextIndex < array.length
        ? { value: Symbol(array[nextIndex++]), done: false }
        : { done: true };
    },
  };
}

const iter = arrayIterator(["hello", "world", "test"]);

for (const value of iter) {
  console.log(value);
}
