# get largest or smallest number in array

First create an array. <br/>
Example: let array = [7, 9, 1, 6];

## Get largest number in an array


- we start at 0, we assume that the value at index 0 is the maximum number
- we loop through each of the elements one by one
- we compare the value of max with the value of number in current index
- if value in current index is greater than max we replace max with the value in current index
- as long as i is less than array.length, keep looping
- and once it stops looping after it scans the whole array, return the value of max.

```
function getLargestNumInArray(array) {
  let max = array[0];
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

 - if the array was sorted in descending order, then the largest value would be at array[0], and the smallest would be at array.length - 1,
 - if ascending order, then the largest value would be at array.length - 1 and the smallest would be at array[0]
 
```
const getSmallestNumInArray = (array) => {
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
