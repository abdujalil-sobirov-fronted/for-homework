let n = Number(prompt("n ni kiriting"));
let s = 1;
for(let i = 1.1; i<=n ; i+=0.1) {
  s *=i;
}
console.log(s);