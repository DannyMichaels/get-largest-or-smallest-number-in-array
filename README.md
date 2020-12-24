# get largest or smallest number in array

First create an array. <br/>
Example: let array = [7, 9, 1, 6];

## Get largest number in an array

```
function getLargestNumInArray(array) {
  let max = array[0]; // max is now 7, first index of array.
  for (let i = 0; i < array.length; i++) {
    if (max < array[i]) {
      max = array[i]; 
    }
  }
  return max;
}
console.log("largest:", getLargestNumInArray(array));

```

## Get Smallest number in an array

```
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
```
