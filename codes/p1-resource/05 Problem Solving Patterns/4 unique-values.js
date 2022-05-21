function countUniqueValues(arr) {
  if (arr.length === 0) return 0;
  var i = 0;
  for (var j = 1; j < arr.length; j++) {
    console.log(arr[i]);
    console.log(arr[j]);
    if (arr[i] !== arr[j]) {
      i++;
      arr[i] = arr[j];
    }
  }
  return i + 1;
}
//todo Implement a function called countUniqueValues, which accepts a sorted array, and counts the unique values in the array. There can be negative numbers in the array, but it will always be sorted.
countUniqueValues([1, 2, 3, 4]);
// countUniqueValues([1, 2, 3, 10, 25, 2, 3, 1]);
