function Inverted(rows) {
  let triangle = [];

  for (let i = 0; i < rows; i++) {
    triangle[i] = [];
    triangle[i][0] = 1;
    for (let j = 1; j < i; j++) {
      triangle[i][j] = triangle[i - 1][j - 1] + triangle[i - 1][j];
    }
    triangle[i][i] = 1;
  }

  let fullTriangle = triangle.reverse();

  for (let i = 0; i < fullTriangle.length; i++) {
    let output = "";
    
    for (let s = 0; s < i; s++) {
      output += " ";
    }

    for (let j = 0; j < fullTriangle[i].length; j++) {
      output += fullTriangle[i][j] + " ";
    }
    
    console.log(output.trimEnd());
  }
}

Inverted(5);