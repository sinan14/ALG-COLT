function same(arr1, arr2) {
  if (arr1.length !== arr2.length) {
    return false;
  }
  const frequencyCounter1 = {};
  const frequencyCounter2 = {};
  //todo 1) O(n)
  for (let val of arr1) {
    console.log(frequencyCounter1);
    //todo assigns array values as objeect keys
    frequencyCounter1[val] = (frequencyCounter1[val] || 0) + 1;

    console.log("f1");
    console.log(frequencyCounter1);
  }

  //todo 2) O(n)

  for (let val of arr2) {
    frequencyCounter2[val] = (frequencyCounter2[val] || 0) + 1;
    console.log("f2");
    console.log(frequencyCounter2);
  }
  console.log(frequencyCounter1);
  console.log(frequencyCounter2);
  //todo 3) O(n)

  for (let key in frequencyCounter1) {
    // console.log(key);
    // console.log(frequencyCounter2[key ** 2]);
    // todo checking wheter key present in f2
    if (!(key ** 2 in frequencyCounter2)) {
      return false;
    }
    //todo checking   if(f2(2*2) != f1(2))
    if (frequencyCounter2[key ** 2] !== frequencyCounter1[key]) {
      return false;
    }
  }
  return true;
}

same([2, 3, 3, 7], [9, 49, 4, 9]);
//Big o O(3n)
