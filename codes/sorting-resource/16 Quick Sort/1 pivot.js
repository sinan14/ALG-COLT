// First Version
function pivot(arr, start = 0, end = arr.length + 1) {
  function swap(array, i, j) {
    var temp = array[i];
    array[i] = array[j];
    array[j] = temp;
  }

  var pivot = arr[start];
  var swapIdx = start;

  for (var i = start + 1; i < arr.length; i++) {
    if (pivot > arr[i]) {
      swapIdx++;
      swap(arr, swapIdx, i);
    }
  }
  swap(arr, start, swapIdx);
  return swapIdx;
}

// Version with ES2015 Syntax
function pivot(arr, start = 0, end = arr.length - 1) {
  const swap = (arr, idx1, idx2) => {
    [arr[idx1], arr[idx2]] = [arr[idx2], arr[idx1]];
  };

  // We are assuming the pivot is always the first element
  let pivot = arr[start];
  let swapIdx = start;

  for (let i = start + 1; i <= end; i++) {
    if (pivot > arr[i]) {
      swapIdx++;
      swap(arr, swapIdx, i);
    }
  }

  // Swap the pivot from the start the swapPoint
  swap(arr, start, swapIdx);
  return swapIdx;
}

pivot([4, 8, 2, 1, 5, 7, 6, 3]);

// step1 [4,8,2,1,5,7,6,3] //todo original
// step2 [4,2,8,1,5,7,6,3] //todo swap 8 with 2
// stpe3 [4,2,1,8,5,7,6,3] //todo swap 8 with 1
// step4 [4,2,1,3,5,7,6,8]//todo swap 8 with 3
//todo out of for loop

//todo swap 4 with with element at new swap index that is 3 here
// step5 [3,2,1,4,5,7,6,8]
