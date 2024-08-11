let ans = 0;
let n = 5;

function handshake(att) {
  if (att == 1) {
    return 0;
  }
  let count = 0;
  for (let i = 0; i < att; i++) {
    ans += i;
  }
  return ans;
}

console.log(handshake(n));
