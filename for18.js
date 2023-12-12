let a = Number(prompt("a ni kiriting"));
let n = Number(prompt("n ni kiriting"));
let s = 0;
let t = 0;
for (let i = 0; i<=n ; i +=2) {
  s += a**i; 
}
for (let i = 1; i<=n ; i +=2) {
  t += a**i; 
}
console.log(s-t);