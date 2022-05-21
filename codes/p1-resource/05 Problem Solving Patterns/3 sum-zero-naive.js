function sumZero(arr) {
  for (let i = 0; i < arr.length; i++) {
    //todo nested for loop
    for (let j = i + 1; j < arr.length; j++) {
      if (arr[i] + arr[j] === 0) {
        return [arr[i], arr[j]];
      }
    }
  }
}
//! Big O = O(n*n)
sumZero([-4, -3, -2, -1, 0, 1, 2, 5]);
