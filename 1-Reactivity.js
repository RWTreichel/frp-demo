var x = 1;
var y = x + 1; // 2
x = 2; // If y were reactive, then changing x to 2 would immediately assign 3 to y...
console.log(y); //...and this line would output 3 to the console.

setTimeout(function() {
  y = x + 1; // Must manually update y!
  console.log(y);
}, 1000);