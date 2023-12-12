let n = Number(prompt("n ni kiririting"));
let s = 0;
let y = 0;
for (let i = 1.1; i<=n ; i+=0.2) {
  s = s+i;
}
for (let i = 1.2; i<=n ; i+=0.2) {
  y = y+i;
}
console.log(s-y);