let string = "swift";

function swift(string) {
  if (string.length < 3) {
    console.log("String length must be at least 1.");
  } else {
    let str = string.slice(2, 5);
    console.log(str + string + str);
  }
}

swift(string);
