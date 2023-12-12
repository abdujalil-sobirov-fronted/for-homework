let n = 2;
let x = 3;
let s = 0;
let a = 0;
let b = 0;
let d = 0;
for (let i = 1 ; i<=(2*n+1) ; i +=4) {
}

for (let i = 1 ; i<=(2*n+1) ; i +=4) {
  a += (a**i)/d;
}

for (let i = 3; i<=(2*n+1) ; i +=4) {
  b += a**i;
}