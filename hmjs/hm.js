function makeDiamondShapeWithLetters(input) {
  var letters = [
    "A",
    "B",
    "C",
    "D",
    "E",
    "F",
    "G",
    "H",
    "I",
    "J",
    "K",
    "L",
    "M",
    "N",
    "O",
    "P",
    "Q",
    "R",
    "S",
    "T",
    "U",
    "V",
    "W",
    "X",
    "Y",
    "Z",
  ];

  if (input > letters.length) {
    console.log("input should be less than or equal " + letters.length);
    return;
  }

  var result = "";
  for (var i = 0; i < input; i++) {
    for (var j = 0; j < input - i; j++) {
      result += " ";
    }
    for (var j = 0; j < i; j++) {
      result += letters[j];
    }
    for (var j = i; j > 0; j--) {
      result += letters[j];
    }
    result += letters[0] + "\n";
  }
  for (var i = input - 2; i > -1; i--) {
    for (var j = 0; j < input - i; j++) {
      result += " ";
    }
    for (var j = 0; j < i; j++) {
      result += letters[j];
    }
    for (var j = i; j > 0; j--) {
      result += letters[j];
    }

    result += letters[0] + "\n";
  }

  return result;
}

console.log(makeDiamondShapeWithLetters(7));
