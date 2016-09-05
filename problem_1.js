var part1 = 0;
var part2 = 0;
var part3 = 0;
for (var i = 1; i <= 333; i++) {
  part1 += i*3;
}


for (var i = 1; i <= 199; i++) {
  part2 += i*5;
}

for (var i = 1; i <= Math.floor(1000/15); i++) {
  part3 += i*15;
}
var sum = part1 + part2 - part3;
console.log("answer = " + sum);
