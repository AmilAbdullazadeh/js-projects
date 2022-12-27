function recursionFactorial(num) {
  debugger
  if (num < 2) return 1
  console.log(num * recursionFactorial(num - 1));
} 
recursionFactorial(5);
// console.log(recursionFactorial(3))
