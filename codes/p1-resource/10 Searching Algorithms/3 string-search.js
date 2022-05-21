function naiveSearch(long, short) {
  var count = 0;
  for (var i = 0; i < long.length; i++) {
    for (var j = 0; j < short.length; j++) {
      //todo pattern wrong aayal loopil ninnu exit avunu next i yilekk enter cheyyunu
      console.log(short[j], long[i + j]);
      if (short[j] !== long[i + j]) {
        console.log("BREAK");
        break;
      }
      if (j === short.length - 1) {
        console.log("found one");
        count++;
      }
    }
  }
  return count;
}

naiveSearch("lorie loled", "lol");

function naiveSearch2(long, short) {
  var count = 0;
  for (var i = 0; i < long.length; i++) {
    for (var j = 0; j < short.length; j++) {
      console.log(short[j], long[i + j]);
      if (short[j] !== long[i + j]) break;
      if (j === short.length - 1) count++;
    }
  }
  return count;
}

naiveSearch("lorie loled", "lol");
