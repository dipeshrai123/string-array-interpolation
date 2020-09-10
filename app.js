const val = 1;
const inputRange = [1, 2];
const outputRange = [
  ".2px solid red rgba(0, 0, 0, 0.1)",
  "10px solid blue rgba(0, 0, 0, 1)",
];

const x = interpolate(val, inputRange, outputRange);
console.log(x);
