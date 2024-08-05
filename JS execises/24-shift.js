let string;

function shiftString(str) {
  let firstChar = str.charAt(0);
  console.log(firstChar + str + firstChar);
}

shiftString("example"); // Output: "eexampl"
