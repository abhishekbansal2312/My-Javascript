let string = "javascript";

function matching(string) {
  if (string.length < 4) {
    console.log("String length must be at least 1.");
  } else {
    let str = string.slice(0, 4);
    if (str == "java") {
      console.log(true);
    } else {
      console.log(false);
    }
  }
}

matching(string);