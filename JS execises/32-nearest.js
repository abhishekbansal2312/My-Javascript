function nearest(x, y) {
  let num1 = (100 - x) * (100 - x);
  let num2 = (100 - y) * (100 - y);
  if (num1 < num2) {
    return x;
  } else {
    return y;
  }
}

console.log(nearest(90, 89));
console.log(nearest(90, 90));

