function printSquare(n) {
  let size = 2 * n - 1;
  
  for (let i = 0; i < size; i++) {
    let row = "";
    for (let j = 0; j < size; j++) {
      let top = i;
      let left = j;
      let bottom = size - 1 - i;
      let right = size - 1 - j;
      
      let val = n - Math.min(top, bottom, left, right);
      row += val + " ";
    }
    console.log(row.trim());
  }
}

printSquare(4);