let x = Number(prompt("x ni kiriting"));
let n = Number(prompt("n ni kiriting"));
let s = 1;
let y = 0;
let natija = 0;
for (let i = 1; i<=n; i++) {
  s *=i;
  y +=((x**i)/s);
}
y += 1;
console.log(y);