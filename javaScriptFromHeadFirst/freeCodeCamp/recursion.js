function multiply(arr, n) {
  if (n <= 0) {
    return 0;
  } else {
    return multiply(arr, n - 1) + arr[n - 1];
  }
}

let data = multiply([2,3,4,5] , 4);

console.log(data);