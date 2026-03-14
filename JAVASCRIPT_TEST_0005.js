function TrianglePrint(n) {
  let num = 1;
  for (let i = 1; i <= n; i++) {
    let Output = "";
    for (let j = 1; j <= i; j++) {
      Output += num + " ";
      num++;
    }
    console.log(Output.trim());
  }
}

TrianglePrint(5);