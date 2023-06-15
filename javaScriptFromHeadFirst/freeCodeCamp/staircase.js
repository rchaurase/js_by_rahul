
function staircase(n) {
  // Write your code here
  let newLine = '';
  for(let i = 1; i<n+1; i++){
      newLine += Array(n-i).fill(' ').join('');
      newLine += Array(i).fill('#').join('');
      console.log(newLine);
      newLine = '';
  }

}
staircase(6);