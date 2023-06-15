function bonAppetit(bill, k, b) {
  const sum = bill.reduce((r, v) => r + v, 0);
  const result = (sum - bill[k])/2;
  if (b - result === 0) console.log('Bon Appetit');
  else console.log(b - result);
}
console.log(bonAppetit([4, 1],[3, 10, 2, 9],12))
