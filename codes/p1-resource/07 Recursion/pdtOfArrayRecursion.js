function sumOfArray(arr) {
  if (!arr.length) return 0;
  let total = arr[0] + sumOfArray(arr.slice(1));
  return total;
}

// sumOfArray([1,2,3])    // 6
sumOfArray([1, 2, 3, 10]); // 16

function productOfArray(arr) {
  if (!arr.length) return 1;
  let total = arr[0] * productOfArray(arr.slice(1));
  return total;
}

// productOfArray([1, 2, 3]); // 6
productOfArray([1, 2, 3, 10]); // 60
//todo you shouldnot give empty array

//todo another approach

const arr = [];
const arrayProduct = ([front, ...end]) => {
  if (front === undefined) {
    return 1;
  }
  return front * arrayProduct(end);
};
console.log(arrayProduct(arr));
