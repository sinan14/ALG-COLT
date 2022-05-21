function insertionSort(arr) {
  var currentVal;
  for (var i = 1; i < arr.length; i++) {
    console.log("i is " + i);
    currentVal = arr[i];
    for (var j = i - 1; j >= 0 && arr[j] > currentVal; j--) {
      console.log("j is " + j);
      arr[j + 1] = arr[j];
    }
    arr[j + 1] = currentVal;
    //todo
    console.log(arr);
  }
  return arr;
}

insertionSort([2, 1, 9, 76, 4]);
