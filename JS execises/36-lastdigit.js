function checklastdigit(num1, num2, num3) {
  if (num1 % 10 === num2 % 10 && num2 % 10 === num3 % 10) {
    return true;
  } else {
    return false;
  }
}


console.log(checklastdigit(123, 456, 789));

console.log(checklastdigit(10,10,10));