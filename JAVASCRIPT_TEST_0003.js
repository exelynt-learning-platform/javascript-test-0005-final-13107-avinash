function printBinaryTriangle(n) {
  for (let i = 1; i <= n; i++) {
    let Output = "";
    for (let j = 1; j <= i; j++) {
      if ((i + j) % 2 === 0) {
        Output += "1 ";
      } else {
        Output += "0 ";
      }
    }
    console.log(Output.trim());
  }
}

printBinaryTriangle(6);