function removeChar(str, pos) {
    return str.slice(0, pos) + str.slice(pos + 1);
}

console.log(removeChar('JavaScript', 0)); // avascript