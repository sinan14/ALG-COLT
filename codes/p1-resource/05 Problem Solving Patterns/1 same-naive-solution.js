//TODO checks if second array contains the squares of arr1
function same(arr1, arr2) {
  if (arr1.length !== arr2.length) {
    return false;
  }
  //todo 1) O(n)
  for (let i = 0; i < arr1.length; i++) {
    //todo finds the index of square of element of arr1 in arr2 if square not present it will return -1.
    //todo 2) O(n) therefore O(n*n)
    const correctIndex = arr2.indexOf(arr1[i] ** 2);
    if (correctIndex === -1) {
      return false;
    }
    console.log(arr2);
    arr2.splice(correctIndex, 1);
  }
  return true;
}

same([1, 2, 3, 2], [9, 1, 4, 4]);
