let n = Number(prompt("n ni kiriting"));
let s = 1;
let y = 0;
for (let i = 1 ; i<=n ; i++) {
  s *=i;
  y +=1/s;
}
console.log(y);