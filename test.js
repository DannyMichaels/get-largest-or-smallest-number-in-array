let array = [7, 9, 1, 6];

// min = 1
// max = 9
// sum = 7+9+1+6 = 23

// maxSum = sum - minNumber => 23 - 1 = 22
// minSum = 23 - 9 = 14
// 14 22

// we start at 0, we assume that the value at index 0 is the maximum number
// we loop through each of the elements one by one
// we compare the value of max with the value of number in current index
// if value in current index is greater than max we replace max with the value in current index
// as long as i is less than array.length, keep looping
// and once it stops looping after it scans the whole array, return the value of max (once the looping is done, return max)

function getLargestNumInArray(array) {
  let max = array[0]; // max is now 7, first index of array.
  for (let i = 0; i < array.length; i++) {
    // i=1,2,3
    // value at index 0 is 7 (i = 0, but value at index 0 is 7)
    if (max < array[i]) {
      // if it's false nothing will happen , 9 < array[3]=> 9< 6
      max = array[i]; // max = 9
    }
  }
  return max;
}

console.log("largest:", getLargestNumInArray(array));

const getSmallestNumInArray = (array) => {
  // if the array was sorted in descending order, then the largest value would be at array[0], and the smallest would be at array.length - 1,
  // if ascending order, then the largest value would be at array.length - 1 and the smallest would be at array[0]
  let min = array[0];
  for (let i = 0; i < array.length; i++) {
    if (min > array[i]) {
      min = array[i];
    }
  }
  return min;
};

console.log("smallest:", getSmallestNumInArray(array));
