let a = Number(prompt("a ni kiriting"));
let n = Number(prompt("n ni kiriting"));
let s = 0;
for (let i = 1; i<=n ; i++) {
  s += a**i; 
}
console.log(s);