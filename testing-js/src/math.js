const expect = expect => {
  return {
    toBe: result => {
      if (result !== expect) {
        throw new Error(`${result} is not ${expect}`);
      }
    }
  };
};
const sum = (a, b) => a + b;

const subtract = (a, b) => a - b;

let result = sum(2, 3);
let final = 5;
expect(result).toBe(final);

result = subtract(5, 2);
final = 6;
expect(result).toBe(final);
