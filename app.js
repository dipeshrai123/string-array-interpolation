const val = 2;
const inputRange = [1, 2];
const outputRange = [
  "translate(100px, 200.50px) scale(2) #3399ff",
  "translate(200px, 10.5px) scale(1) blue",
];
const x = interpolate(val, inputRange, outputRange);
console.log(x);
